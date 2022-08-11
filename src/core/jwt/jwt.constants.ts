/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-11 20:05:15
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-11 20:11:45
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
export const JwtConstants = {
  secret: process.env.JWT_SECRET,
  signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
};