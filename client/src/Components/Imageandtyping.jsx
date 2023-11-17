import React from 'react'
import Typewriter from "typewriter-effect";
import './App.css';
import tinuimg from "./Images/mine.png"
import newtinu from "./Images/newtinu.png"
import styled from "styled-components";
import resume from "./Resume15.pdf"
import {Link} from "react-router-dom"

const size = {
  mobile: "max-width:425px",
  tablet: "max-width:760px",
  mobiles: "max-width:320px and max-width:400px",
};
const Typing=styled.div`
 //color:#c780fa;
 color:red;
 

 font-weight:1000;

`
const Firstdiv=styled.div`




`
const Seconddiv=styled.div`

display:flex;
justify-content:space-around;
margin-top:4rem;

align-item:center;

@media(max-width:600px)
{
  display:block;
  margin-top:2rem;

}

`
const Image=styled.img`
 height:25rem;

border:4px solid aqua;
  border-radius:50%;
  tranform:translateY(-50%)
&:hover{
border:4px solid aqua;
 border-radius:50%;
  transition:600ms;

  transform :translateY(50px);
}
@media(${size.tablet})
{
  height:23rem;
}
@media(max-width:700px){
  height:22rem;

}
@media(max-width:670px){
  height:20rem;

}

@media(max-width:600px){
  height:22rem;

}
@media(max-width:400px){
  height:19rem;
}

`
const About=styled.div`
padding-top:3rem;
font-size:2.5rem;

@media(max-width:700px){
  font-size:2rem;

}
@media(max-width:670px){
  font-size:1.9rem;

}

@media(max-width:600px){
 text-align:center;
 padding-top:0;
 font-size:2.2rem;


}

@media(max-width:400px){
     font-size:1.8rem;
}

`
const Style=styled.span`
color:#c780fa;


// color:red;
font-weight:800;

`
const Button=styled.button`
 padding:10px  50px;
 border:none;
 background-color:aqua;

color:#fff;
 border-radius:5rem;
 font-size:1.1rem;
 font-weight:800px;
 margin-top:10px;

 &:hover{
  outline:2px solid aqua ;
  background-color:white;
    color:black;
    transition:600ms;
    padding:10px 50px;
    transform :translateY(-0px);

    
 }
`
const Backimage =styled.div`

`

const Imageandtyping = () => {
  return (
    <Firstdiv >
    <Seconddiv >
    
         <About>

           <div>Hello<span className='wave'>👋</span></div>
           <div>I'm <Style>Tinu kumar</Style></div>
           <div>
           
          
           <Typing className='typingchange'>
           
           <Typewriter 
           options={{
             strings: ['Developer',  , 'Tech writer','web designer' , 'Blogger'],
             autoStart: true,
             loop: true,
           }}
         />
           </Typing>
           </div>
           

               <Button><Link to="/resume" style={{textDecoration:"none" , color:"black" ,fontSize:'17px' , fontWeight:"600"}} >Resume</Link></Button>
         </About>
    
           
          <Backimage >
        <Image className='tinu_img' src={newtinu}></Image>
          </Backimage>
          </Seconddiv>
    </Firstdiv>
  )
}

export default Imageandtyping