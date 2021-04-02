import {NextFunction, Request, Response} from 'express';
import * as path from 'path';
import * as express from 'express';
import * as aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';


const dotenv = require('dotenv');
dotenv.config(); // LOAD CONFIG

const s3 = new aws.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});


const upload = multer({

    // 이미지 파일이 아니면 짜른다
    fileFilter: function( _, file, callback) {
        const ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('허용되지 않는 파일형식 저장'));
        }
        callback(null, true);
    },

    storage: multerS3({
        s3: s3,
        bucket: process.env.AWS_BUCKET,

        // 저장되는 방식 : org/단체 ID/날짜명 group명
        key: function(req, file, cb) {
            cb(null,
                req.params.group + '/' + req.params.id + '/' +
                uuidv1() +'.'+ file.mimetype.split('/')[1] );
        },
        acl: 'public-read',
    }),

});

module.exports = upload;
