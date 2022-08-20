import { createParamDecorator, ExecutionContext } from "@nestjs/common";
/**
 * @description: 控制器方法使用@User注解或使用@User['字段']
 * @return {*}
 */
export const Mall = createParamDecorator(
  (data:string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;

  return data ? user && user[data] : user;
  }
)