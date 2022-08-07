import { BusinessException } from 'src/core/exception/BusinessException';

export class JsonResult {
  public message: string;
  public code: number;
  public data: any;

  constructor(code: number = 0, message: string = 'success', data?: any) {
    this.message = message;
    this.code = code;
    this.data = data || '';
  }

  static ok(
    code: number = 0,
    message: string = 'success',
    data?: any,
  ): JsonResult {
    return new JsonResult(code, message, data);
  }

  static error(code: number = -1, message: string = 'error'): void {
    throw new BusinessException(code, message);
  }
}
