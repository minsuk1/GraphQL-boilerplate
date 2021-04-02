import * as path from 'path';
import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

const dotenv = require('dotenv');
dotenv.config(); // LOAD CONFIG

const s3 = new aws.S3();

aws.config.update({
    secretAccessKey: process.env.AWS_SECRET_KEY,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });


  const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'bucket-name',
        key: function(req, file, cb) {
            console.log(file);
            cb(null, file.originalname); // use Date.now() for unique file keys
        },
    }),
});

export default upload;
