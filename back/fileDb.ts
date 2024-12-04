
const path = "./messages"
import {promises as fs} from "fs"


const fileDb = {
    async init(){
        try{
            const files = await fs.readFile(path)
        }catch(e){
            console.error(e)
        }
    }
}

export default fileDb