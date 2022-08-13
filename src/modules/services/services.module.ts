import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { HelloService } from "./hello.service";
import { UserService } from "./user.service";

const services = [
  AppService,
  UserService,
  HelloService
]

@Module({
  imports: [],
  providers: [...services],
  exports: [...services],
})
export class ServiceModule {}