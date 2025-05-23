import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Prisma } from 'generated/prisma';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message: any = 'Internal server error';

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      message = exception.getResponse();
    } else if (exception instanceof Prisma.PrismaClientKnownRequestError) {
      switch (exception.code) {
        case 'P2002': // Unique constraint failed
          status = HttpStatus.BAD_REQUEST;
          message = {
            error: 'Duplicate field value',
            detail: (exception.meta as any)?.target,
          };
          break;
        case 'P2025': // Record not found
          status = HttpStatus.NOT_FOUND;
          message = {
            error: 'Record not found',
            detail: exception.meta,
          };
          break;
        default:
          message = {
            error: 'Database error',
            detail: exception.message,
          };
      }
    } else if (exception instanceof Error) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = {
        error: exception.name,
        detail: exception.message,
      };
    }
    response.status(status).json({
      success: false,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      response: message,
    });
  }
}
