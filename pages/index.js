import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Style from './style.module.css'
import React, { useRef, useState } from 'react';
// import { useState } from 'react/cjs/react.development'
const  Home = () => {
  let user= useUser();
  async function findstory(){
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
  }

  let user_data=null;
 if(user==null){
  return (
    <Layout className={Style.body}>
      <h1>Passport.js Example</h1>

      Please Wait or try Again....
    </Layout>
  )

}else{
  findstory();
  return (
  <Layout className={Style.body}>
      <h1>Passport.js Example</h1>

      <p>Steps to test the example:</p>

      <ol>
        <li>Click Login and enter a username and password.</li>
        <li>
          You'll be redirected to Home. Click on Profile, notice how your
          session is being used through a token stored in a cookie.
        </li>
        <li>
          Click Logout and try to go to Profile again. You'll get redirected to
          Login.
        </li>
      </ol>

      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </Layout>
  )
}
}


export default Home
