import React, { useEffect, useRef, useState } from 'react';
import Router from 'next/router'

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
    let tempp=data.story[data.storyno].chapter;
    for(let i=0;i<tempp.length;i++){
    return (
    <div >
      
        {/* {user!=null? (
          <>
            <p>Currently logged in as:</p>
            <pre>{JSON.stringify(tempp, null, 2)}</pre>
          </>
        ):("no user")} */}
  
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
}
  
  
  
  export default Home;
  