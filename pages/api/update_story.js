
import {MongoClient} from 'mongodb'
async function handler(req,res){
    
    console.log(req.body);   

    const data=req.body;

const client=await MongoClient.connect('mongodb+srv://Vivek:TeNzP6QPWszrWcKX@cluster0.hmbhl.mongodb.net/Pratilipi?retryWrites=true&w=majority');
const db=client.db();



const meetupsCollections=db.collection('user_record');
const result=await meetupsCollections.updateOne(data);
console.log(result.description);
client.close();

res.status(201).json({message: 'data inserted'});


}

export default handler;