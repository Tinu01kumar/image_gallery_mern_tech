import React from 'react'
import "./App.css"
import Headword from './Headword'
import styled from "styled-components"
const Programmingicons=styled.h1`

font-size:2.4rem;
text-align:center;
`
const Programmingbox=styled.div`

display:block;
justify-content:center;
text-align:center;


`
const Image=styled.img`

margin:1rem 2rem;

padding:0rem 0rem;



`

const Skills = () => {
  return (
   <div id="test3">
      <Headword name="Skills" />
     
      
              
      <Programmingicons>Programming Languages</Programmingicons>
     <Programmingbox  >


        <Image className='skillimage' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
       
        <Image className='skillimage' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
          
       
        
        <Image className='skillimage' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
          
          
        
        
        <Image className='skillimage' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          

        
        <Image className='skillimage' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" />
          
          
       
        <Image className="skillimage" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          
        
        <Image className="skillimage" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg" />
          
      
     </Programmingbox>
          


        <div style={{padding:"2rem 0rem"}}></div>

     <Programmingicons>Libraries , Frameworks & SDK</Programmingicons>
     <Programmingbox>
        
     
     <Image  className="skillimage"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          
     
     <Image className="skillimage"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
          

     
     <Image className="skillimage"   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
          



     
     <Image className="skillimage"   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
          

     
     <Image className='skillimage' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
          
     </Programmingbox>
     




     <div style={{padding:"2rem 0rem"}}></div>

     <Programmingicons>Database</Programmingicons>
  <Programmingbox>
  
   
  <Image className='skillimage' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />
          
  
  <Image  className='skillimage'  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          
  </Programmingbox>








  <div style={{padding:"2rem 0rem"}}></div>

  <Programmingicons>Tools & Technologies</Programmingicons>
<Programmingbox>

<Image className='skillimage'   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          

<Image className='skillimage'   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          

<Image className='skillimage'   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
          


<Image className='skillimage'   src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg" />
          
       
</Programmingbox>

   



   </div>


  )
}

export default Skills