
import {NextFunction, Request, Response} from 'express';


// 이미지 저장되는 위치 설정
const path = require('path');
const uploadDir = path.join( __dirname, '../uploads' ); // 루트의 uploads위치에 저장한다.

// multer 셋팅
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req: Request, file, callback) => {
        callback(null, uploadDir );
    },
    filename: (req: Request, file, callback) => {
        callback(null, 'products-' + Date.now() + '.'+ file.mimetype.split('/')[1] );
    },
});
module.exports = multer({storage: storage});
