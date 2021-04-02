import * as path from 'path';
import * as express from 'express';
import * as AWS from 'aws-sdk';
import * as multer from 'multer';
import * as multerS3 from 'multer-s3';

const dotenv = require('dotenv');
dotenv.config(); // LOAD CONFIG

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY, 
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION
})
 

AWS.config.update({
    region: 'ap-northeast-2',
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  });

  const upload = multer.default({
    storage: multerS3.default({
      s3: new AWS.S3(),
      bucket: 'react-nodebird',
      key(req, file, cb) {
        cb(null, `original/${+new Date()}${path.basename(file.originalname)}`);
      },
    }),
    limits: {fileSize: 20 * 1024 * 1024},
  });
