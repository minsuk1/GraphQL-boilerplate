import * as express from "express"
import {Request, Response, NextFunction, application} from 'express'

const app = express();

app.get('/', (req,res,next)=>{
    res.send('minsuk')
})

app.listen(4000,()=>console.log("start"));