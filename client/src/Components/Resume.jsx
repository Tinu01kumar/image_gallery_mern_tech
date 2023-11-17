import React from 'react'
import resume from "./Images/resumepic.jpg"
import Footer from './Footer'
import styled from "styled-components";
import "./App.css"
const A =styled.a`
 &:hover{
  color:"black";
 }
`

const Button=styled.button`
 padding:10px  50px;
 border:none;
 background-color:aqua;
color:#fff;
 border-radius:5rem;
 font-size:1rem;
 font-weight:1000px;
 margin-top:10px;
 font-weight:"600px";

 &:hover{
  outline:3px solid aqua ;
  background-color:white;
    color:black;
    transition:600ms;
    padding:10px 50px;
    transform :translateY(-0px);

    
 }
`

const Resume = () => {
  return (
    <>
    
    <div className='divofresumeimage' >
    <div style={{paddingBottom:"2rem" , paddingTop:"2rem"}}>
    
    <Button style={{padding:"10px 50px"   }}><A  style={{textDecoration:"none" , }}target="_blank" href="https://drive.google.com/file/d/1b_ggjTqgMPCuuI4Etkfnf_W8IZRo-T_N/view?usp=sharing">Download</A></Button>
    </div>
    <div >
 
      <img  className="resumeimage" src={resume}></img>
   
     
     
    </div>
    </div>
    <div ><Footer></Footer></div>
    </>
  )
}

export default Resume