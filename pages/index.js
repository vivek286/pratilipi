import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Dispaly from './display'
import Style from './style.module.css'
import React, { useRef, useState } from 'react';
// import { useState } from 'react/cjs/react.development'
const  Home = () => {
  let user= useUser();
  let [datat,setdata]=useState({});
  const [istrue,setistrue]=useState(true);
  async function findstory(){
    setistrue(false);
    const response=await fetch('./api/daily_data',{
      method:'POST',
  body:(JSON.stringify(user)),
  headers:{
      'content-type':'application/json'
  }
    });
    console.log(response);
    let temp=(await await response.json());
    // console.log(temp);
    setdata(temp);
  }

  let user_data=null;
 if(user==null){
  return (
    <Layout className={Style.body}>
      <h1>Log in </h1>

      Please Wait or try Again....
    </Layout>
  )

}else{
  if(istrue)findstory();
  return (
  <Layout className={Style.body}>
      <h3>Steps for viewing api results</h3>

      <ol>
        <li>Below displayed are all stories present in DB.User must be logged in inorder to access them.</li>
        <li>
          Click on any story and it will show you all chapters unlocked for user.
        </li>
        <li>
          there is a button to unlock more chapters
        </li>
      </ol>

      {user && (
        <div className={Style.containers}>
          <h2>Currently logged in as: {user.username}</h2>
          {datat.story?.map((dat,index)=>(
            
            // <Dispaly key={index} data={dat} ind={index} iddd={String(datat._id)} />
          ))
}
          {/* <pre>{JSON.stringify(datat, null, 2)}</pre> */}
        </div>
      )}

     
    </Layout>
  )
}
}


export default Home
