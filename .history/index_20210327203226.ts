import * as express from "express"


const app = express();

app.get('/', (req,res)=>{
    res.send('minsuk')
})

app.listen(4000,()=>console.log("start"));