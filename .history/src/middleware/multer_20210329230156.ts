import * as path from 'path';
import * as express from 'express';


import AWS = require('aws-sdk');
import multer = require('multer');
import multerS3 = require('multer-s3');

AWS.config.update({
    region: 'ap-northeast-2',
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  });
  
  const upload = multer({
    storage: multerS3({
      s3: new AWS.S3(),
      bucket: 'react-nodebird',
      key(req, file, cb) {
        cb(null, `original/${+new Date()}${path.basename(file.originalname)}`);
      },
    }),
    limits: { fileSize: 20 * 1024 * 1024 },
  });