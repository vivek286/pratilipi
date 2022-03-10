import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'
import { MongoClient } from 'mongodb';

 
 


export async function createUser({ username, password }) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const client=await MongoClient.connect('mongodb+srv://Vivek:TeNzP6QPWszrWcKX@cluster0.hmbhl.mongodb.net/Pratilipi?retryWrites=true&w=majority');
 const db=client.db();
  const getstory=db.collection('story');
  const adduser=db.collection('user_data');
  const user_store=db.collection('user_record');
  let result=await getstory.find().toArray();

  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
    for(let i=0;i<result.length;i++)if(result[i].unlocked==null)result[i].unlocked=4;
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    hash,
    salt
  };
  const user_rec={
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    hash,
    salt,
    story:result
  }
  await user_store.insertOne(user_rec);


  
  await adduser.insertOne(user);
client.close();
  return user;
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  // This is an in memory store for users
  const client=await MongoClient.connect('mongodb+srv://Vivek:TeNzP6QPWszrWcKX@cluster0.hmbhl.mongodb.net/Pratilipi?retryWrites=true&w=majority');
  const db=client.db();
  const meetupsCollections=db.collection('user_data');
  let users=await meetupsCollections.find().toArray();
  client.close();
  
  return users.find((user) => user.username === username)
}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export async function validatePassword(user, inputPassword) {
  
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch;
}
