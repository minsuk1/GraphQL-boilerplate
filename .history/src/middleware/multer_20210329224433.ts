
import {NextFunction, Request, Response} from 'express';

export interface MulterFile {
    key: string // Available using `S3`.
    path: string // Available using `DiskStorage`.
    mimetype: string
    originalname: string
    size: number
  }

  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

// 이미지 저장되는 위치 설정
const path = require('path');
const uploadDir = path.join( __dirname, '../uploads' ); // 루트의 uploads위치에 저장한다.

// multer 셋팅
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req: Request, files: MulterFile[], callback) => {
        callback(null, uploadDir );
    },
    filename: (req: Request, files: MulterFile[], callback) => {
        callback(null, 'products-' + Date.now() + '.'+ files.mimetype.split('/')[1] );
    },
});

module.exports = multer({storage: storage});
