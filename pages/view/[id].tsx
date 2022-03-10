import React, { useEffect, useRef, useState } from 'react';
import Router from 'next/router'
import { useUser } from '../../lib/hooks'
import Layout from '../../components/layout'
import Form from '../../components/form'
import { MongoClient,ObjectId } from 'mongodb';

const Home = (props) => {
    // let userr= async()=>{return } ;
    const [data,setData]=useState(JSON.parse(props.posts));

    const [user,setuser]=useState({});
    async function get_user(){
      let aa=await useUser();
      setuser(aa);
    }
    // useEffect( () => {
    //   get_user();
    // });
    return (
    <div >
        
        {user!=null? (
          <>
            <p>Currently logged in as:</p>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </>
        ):("no user")}
  
        <style jsx>{`
          li {
            margin-bottom: 0.5rem;
          }
          pre {
            white-space: pre-wrap;
            word-wrap: break-word;
          }
        `}</style>
      </div>
    )
  }
  
  
  
  export default Home;
  export async function getServerSideProps(context){
    const url_id=String(context.params.id);
    const client=await MongoClient.connect('mongodb+srv://Vivek:TeNzP6QPWszrWcKX@cluster0.hmbhl.mongodb.net/Pratilipi?retryWrites=true&w=majority');
const db=client.db();
const collection=db.collection('user_record');
    const post=await collection.findOne({_id:new ObjectId(url_id)});
    const temp=( JSON.stringify(post));
   
    return {
        props:{
          posts:temp
            
            
        }
    }
}

  