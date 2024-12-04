import express from 'express';
import cors from 'cors';
import messagesRouter from "./routers/Messages";
const app = express();
const port = 8000;
const path = "./messages"

const fs = require("fs");


app.use(cors());
app.use(express.json());
app.use("/messages", messagesRouter)

const run = async()=>{

    fs.existsSync(path) ? "" : fs.mkdirSync(path);

    app.listen(port, ()=>{
        console.log(`listening at http://localhost:${port}`);
    })
}

run().catch((err)=>{
    console.log(err);
})



