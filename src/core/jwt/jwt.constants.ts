/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-11 20:05:15
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-12 14:42:50
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
import 'dotenv/config';
export const JwtConstants = {
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
};