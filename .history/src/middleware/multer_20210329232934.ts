import aws from 'aws-sdk';
import multer, { FileFilterCallback } from 'multer';
import multerS3 from 'multer-s3';
const s3 = new aws.S3();
aws.config.update({
  secretAccessKey: process.env.S3_ACCESS_SECRET,
  accessKeyId: process.env.S3_ACCESS_KEY,
  region: process.env.AWS_REGION
});
const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error());
  }
};
const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3,
    bucket: process.env.AWS_BUCKET,
    metadata: (req, file, cb) => {
      cb(null, { fieldName: 'TESTING_METADATA' });
  },
  key: (req, file, cb) => {
    cb(null, Date.now().toString());
    },
  }),
});
export default upload;