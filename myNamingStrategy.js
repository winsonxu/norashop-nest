/*
 * @Author: winsonxu winsonxu@outlook.com
 * @Date: 2022-08-14 17:03:23
 * @LastEditors: winsonxu winsonxu@outlook.com
 * @LastEditTime: 2022-08-15 10:24:34
 * @Description: 
 * 
 * Copyright (c) 2022 by norait, All Rights Reserved. 
 */


/* eslint-disable */
const NamingStrategy = require('typeorm-model-generator/dist/src/NamingStrategy');

// https://github.com/Kononnable/typeorm-model-generator/issues/171
NamingStrategy.entityName = function (entityName, entity) {
  // console.log(entityName, entity.database);
  return entityName.replace('t_', '')+'_entity';
};

// https://github.com/Kononnable/typeorm-model-generator/issues/236
NamingStrategy.fileName = function (fileName) {
  // https://docs.nestjs.com/openapi/cli-plugin
  // Add entity suffix for analysed in swagger plugin
  // console.log('fileName',fileName,  fileName.replace(/_/g, '.'))
  return fileName.replace(/_/g, '.');
};

module.exports = {
  ...NamingStrategy,
};