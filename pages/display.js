import { useUser } from '../lib/hooks'
import Layout from '../components/layout'
import Style from './style.module.css'
import React, { useRef, useState } from 'react';

const  Home = (props) => {
  console.log(props)
  return (
  <div className={Style.body}>
    <div className={Style.header}>
        <p>book:- {props.data.name?props.data.name:""} <br/> by:- {props.data.by?props.data.by:""}</p>
</div>
<div className={Style.content}>
    Book Description <br/>{props.data.content?props.data.content:""}
</div>
<a href={`/view/${String(props.iddd)}-${String(props.ind+1)}`}><button >View Chapters</button></a>

      
    </div>
  )
}



export default Home
