import React from 'react'
import './BackNav.css'
import {MdArrowBack } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

export default function BackNav(props) {
    let {title} = props
    const navigate = useNavigate();
  return (
    <div className='container back_nav_container'>
        <MdArrowBack className='back_arrow' onClick={()=>{navigate(-1)}} />
        <h4 className='title_back_nav'>{title}</h4>
    </div>
  )
}