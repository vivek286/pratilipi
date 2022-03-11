import React, { useEffect, useRef, useState } from 'react';
import Router from 'next/router'
import { useUser } from '../../lib/hooks'
import Layout from '../../components/layout'
import Form from '../../components/form'
import { MongoClient,ObjectId } from 'mongodb';

const Home = (props) => {
    
    const [data,setData]=useState(JSON.parse(props.posts));
    let tempp=data.story[data.storyno-1].chapter;
    const [unlo,setunlo]=useState(data.story[data.storyno-1].unlocked);
    const [stoies,setstories]=useState(tempp.slice(0,unlo));
    async function setall(){
      setunlo(unlo+1);
      setstories(tempp.slice(0,unlo));
     
      if(unlo+1<=tempp.length){
      
  //       let toupdate=data.story;
  //       toupdate[data.storyno-1].unlocked=unlo;
  //       let api_data={
  //         user:data._id,
  //         stor:toupdate
  //       }
  //         const response=await fetch('../api/update_story',{
  //     method:'POST',
  // body:(JSON.stringify(api_data)),
  // headers:{
  //     'content-type':'application/json'
  // }
  //   });
  
      }
    }
    
    
    
    
    return (
    <div >

        {data!=null? (
          <>
            <h2>Story Name : {data.story[data.storyno].name}</h2>
            <button onClick={()=>setall()}>Unlock more Chapter</button>
            <br/>
            <br/>
            <br/>

          <a href="/">  <button>Home</button></a>
          <h3>Max Chapters : {tempp.length} Unlocked : {unlo}</h3>
            <pre>{JSON.stringify(stoies, null, 2)}</pre>
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
    const url_id=String(context.params.id).split("-");
    const client=await MongoClient.connect('mongodb+srv://Vivek:TeNzP6QPWszrWcKX@cluster0.hmbhl.mongodb.net/Pratilipi?retryWrites=true&w=majority');
const db=client.db();
const collection=db.collection('user_record');
    let post=await collection.findOne({_id:new ObjectId(url_id[0])});
    post.storyno=parseInt(url_id[1]);
    const temp=( JSON.stringify(post));
    // console.log(post);
   
    return {
        props:{
          posts:temp,
          
          
            
        }
    }
}

  