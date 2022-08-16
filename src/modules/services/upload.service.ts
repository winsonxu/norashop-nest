/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-16 00:03:06
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-16 15:15:03
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import { Injectable } from "@nestjs/common";
import { ApiConfigService } from "src/core/shared/api-config.service";
import { v4 as uuidv4 } from 'uuid';
import { join, extname } from "path"
import * as fs from 'fs';

@Injectable()
export class UploadService{
  constructor(private readonly apiConfigService:ApiConfigService){ }
  async uploadFile(file: Express.Multer.File): Promise<string>{
    const fileName = uuidv4().replace(/-/g, '')+extname(file.originalname);
    const uploadPath =  this.apiConfigService.uploadConfig.uploadPath
    const now = new Date();
    const absolutePath = join(process.cwd() , uploadPath, now.getFullYear().toString(), now.getMonth().toString(), now.getDay().toString());

    if(!fs.existsSync(absolutePath)){
      fs.mkdirSync(absolutePath, {recursive: true});
    }

    const fullName = join(absolutePath, fileName);
    fs.createWriteStream(fullName).write(file.buffer);
    console.log('uploadFullName',fullName);
    
    return fullName;

    // 保存文件
    // 创建实体
    console.log('file :>> ', file);
    // const writeImage = createWriteStream(uploadPath+ file.originalname)
    //     writeImage.write(file.buffer)

  }
}