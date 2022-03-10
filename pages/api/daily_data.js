// Fetching Story details for displaying
import {MongoClient} from 'mongodb'

async function handler(req,res){
    
    const data=req.body;

    const client=await MongoClient.connect('mongodb+srv://Vivek:TeNzP6QPWszrWcKX@cluster0.hmbhl.mongodb.net/Pratilipi?retryWrites=true&w=majority');
    const db=client.db();
     
     const user_store=db.collection('user_record');
const result=await user_store.findOne({username:data.username});

client.close();

res.status(201).json(result);


}

export default handler;