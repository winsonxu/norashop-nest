/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-15 21:39:58
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-16 20:12:05
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Controller, UseGuards, UseInterceptors, Post, Body, UploadedFile, ParseFilePipeBuilder, UploadedFiles } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { FileInterceptor } from "@nestjs/platform-express";
import { createWriteStream } from "fs";
import { join } from "path";
import { ApiConfigService } from "src/core/shared/api-config.service";
import { UploadService } from "src/modules/services/upload.service";
import { UploadDto } from "./upload.dto";

@Controller('web/upload')
@UseGuards(AuthGuard('jwt'))
export class UploadController{
  constructor(private readonly uploadService: UploadService){ }

  @UseInterceptors(FileInterceptor('file'))
  @Post('file')
  uploadFile( @Body() body: UploadDto, @UploadedFile() file: Express.Multer.File) {
    console.log('file', file);
    const result = this.uploadService.uploadFile(file)
   // 文件组，增删改查
   // 文件增删改查
    //     return '上传成功';
    return { body };
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('file/pass-validation')
  uploadFileAndPassValidation(
    @Body() body: UploadDto,
    @UploadedFile(new ParseFilePipeBuilder().addFileTypeValidator({ fileType: 'json', }) .build({ fileIsRequired: false, }), )
    file?: Express.Multer.File,
  ) {
    return { body, file: file?.buffer.toString()};
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('upload/fail-validation')
  uploadFileAndFailValidation(
    @Body() body: UploadDto,
    @UploadedFile(new ParseFilePipeBuilder().addFileTypeValidator({ fileType: 'jpg' }).build())
    file: Express.Multer.File,
  ) {
    return { body, file: file.buffer.toString(), };
  }
}