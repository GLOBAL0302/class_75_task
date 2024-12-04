import express from "express";
import {promises as fs} from "fs"
const messagesRouter = express.Router();
const path = '/messages'


messagesRouter.get('/', async (req: express.Request, res: express.Response) => {
    const allMessages = []
    const files = await fs.readdir(path);
    for(const file of files){
        let oneFile = await fs.readFile(path +"/" + file);
        const result = JSON.parse(oneFile.toString());
        allMessages.push(result)
    }
    res.send(allMessages);
})

messagesRouter.post("messages/decode", async(req, res)=>{
    const newMessage ={
        password : req.body.password,
        message: req.body.message
    }
    await fs.writeFile(`${path}/${newMessage.password}.txt`, JSON.stringify(newMessage))
})




export default messagesRouter