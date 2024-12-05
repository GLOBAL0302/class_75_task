import express from "express";
import {promises as fs} from "fs"
const Vigenere = require('vigenere');

const messagesRouter = express.Router();
const path = './messages';
messagesRouter.get('/', async (req: express.Request, res: express.Response) => {
    const allMessages = []
    const files = await fs.readdir(path);
    for(const file of files){
        let oneFile = await fs.readFile(path +"/" + file);
        const result = JSON.parse(oneFile.toString());
        allMessages.push(result)
    }
    res.send(allMessages);
});

messagesRouter.post("/decode", async(req, res)=>{
    const newMessage ={
        password : req.body.password,
        message: req.body.message
    }
    await fs.writeFile(`${path}/${newMessage.password}.txt`, JSON.stringify(newMessage));
    let result = ( Vigenere.encode(newMessage.message, newMessage.password));
    res.send(result);
});


messagesRouter.post("/encode", async(req, res)=>{
    const newMessage ={
        password : req.body.password,
        message: req.body.message
    };

    // const files = await fs.readdir(path);
    // await fs.writeFile(`${path}/${newMessage.password}.txt`, JSON.stringify(newMessage));
    let result = ( Vigenere.decode(newMessage.message, newMessage.password));
    res.send(result);
});




export default messagesRouter