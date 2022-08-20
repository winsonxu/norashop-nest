/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-11 17:46:11
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-20 21:46:13
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
export class JwtPayload {
  public constructor(
      public userId: string,
      public mallId?: string
  ) { }

  toJSON(){
    return { userId: this.userId, mallId: this.mallId };
  }
}