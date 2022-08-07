import { Module } from "@nestjs/common";
import { HelloController } from "./hello.controller";
import { HelloService } from "./hello.service";

@Module({
  imports: [],
  controllers: [HelloController],
  exports: [HelloService],
  providers: [HelloService]
})
export class HelloModule {}