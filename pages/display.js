import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Style from './style.module.css'
import React, { useRef, useState } from 'react';

const  Home = (props) => {
  console.log(props)
  return (
  <div className={Style.body}>
    <div className={Style.header}>
        <p>book:- {props.name!=null?props.name:""} <br/> by:- {props.by!=null?props.by:""}</p>
</div>
<div className={Style.content}>
    Book Description <br/>{props.content!=null?props.content:""}
</div>
<a href={`/view/${String(props.iddd!=null?props.iddd:"")}-${String(props.ind?props.ind+1:"")}`}><button >View Chapters</button></a>

      
    </div>
  )
}



export default Home
