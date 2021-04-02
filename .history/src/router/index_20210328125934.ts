import express from 'express';
import usres from './users';

const router = new express.Router();

router.use('/sample', sampleRouter);

export default router;