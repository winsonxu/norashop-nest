/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-11 17:46:11
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-13 12:14:08
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */
export class JwtPayload {
  public constructor(
      public username: string,
      public id: number,
  ) { }

  toJSON(){
    return { username: this.username, id: this.id}
  }
}