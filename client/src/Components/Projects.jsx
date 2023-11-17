import React from 'react'
import blogimage from "./Images/blogfirst.png"
import cryptos from "./Images/cryptoerw.png"
import sms from "./Images/sms.png"
import { Link } from 'react-router-dom';
import styled from "styled-components"
import VisibilityIcon from '@mui/icons-material/Visibility';
import YouTubeIcon from '@mui/icons-material/YouTube';
import recom from "./Images/recom.png"
import Headword from './Headword';
import sofa from "./Images/sofa.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
const Programmingicons=styled.h1`

font-size:2.4rem;
margin-left:2rem;

`


const Image =styled.img`

width: 100%;


`

const Overlay=styled.div`

padding: 2px 16px;

`

const Project =styled.div`

box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 40%;

&:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

`
const Projectbox=styled.div`


`

const Text=styled.div`

`
const Content=styled.div`

`

const Projects = () => {
  return (
    <div id="test4">
    <Headword name="project" />
   

      
     
    <div class="main">
   
    <ul class="cards">







    <li class="cards_item">
    <div class="card">
    <Link>
    
    
    <div class="card_image"><img src={sms} /></div>
    </Link>
      <div class="card_content">
        <h2 class="card_title">SMS SPAM CLASSIFIER</h2>
       
         <div style={{display:"flex" , justifyContent:"space-between" , paddingTop:"1rem"}}>
      
              
         <a href="https://youtu.be/RkhGeRzi_CU" target="_blank"> <YouTubeIcon style={{color:"black"}}className="youtubeicons" sx={{fontSize:45}}/></a>
          
    
    
         <a target="_blank" href="https://github.com/Tinu01kumar/sms_spam_classifier" >
    
    
         <GitHubIcon style   ={{fontSize:"2.8rem" , color:"black"}}className="github_icons" sc={{fontSize:45}}/>
         </a> 
    
         </div>
       
      </div>
    </div>
    </li>
    
    








    
    <li class="cards_item">
    <div class="card">
    <Link>
    
    
    <div class="card_image"><img src={recom} /></div>
    </Link>
      <div class="card_content">
        <h2 class="card_title">Movie Recommendation System</h2>
       
         <div style={{display:"flex" , justifyContent:"space-between" , paddingTop:"1rem"}}>
      
              
         <a href="https://youtu.be/0d3ZJVxOYro" target="_blank"> <YouTubeIcon style={{color:"black"}}className="youtubeicons" sx={{fontSize:45}}/></a>
          


         <a target="_blank" href="https://github.com/Tinu01kumar/Movie_Recommendation_project-_in_python" >


         <GitHubIcon style   ={{fontSize:"2.8rem" , color:"black"}}className="github_icons" sc={{fontSize:45}}/>
         </a> 
    
         </div>
       
      </div>
    </div>
  </li>






     
    <li class="cards_item">
    <div class="card">
    <Link>
    
    <div class="card_image"><img src={blogimage} /></div>
    </Link>
      <div class="card_content">
        <h2 class="card_title">Blogging website</h2>
       
         <div style={{display:"flex" , justifyContent:"space-between" , paddingTop:"1rem"}}>
      
              
         <a  target="_blank" href="https://youtu.be/L8OO2ANRaoE"> <YouTubeIcon style={{color:"black"}}className="youtubeicons" sx={{fontSize:45}}/></a>
          


         <a target="_blank" href="https://github.com/Tinu01kumar/blog_website">


         <GitHubIcon   style   ={{fontSize:"2.8rem" , color:"black"}}className="github_icons" sc={{fontSize:45}}/>
         </a> 
         
         </div>
       
      </div>
    </div>
  </li>







<li class="cards_item extra" >
<div class="card">
<Link>

<div class="card_image"><img src={cryptos} /></div>
</Link>
  <div class="card_content">
    <h2 class="card_title">Cryptocurrncy</h2>
   
     <div style={{display:"flex" , justifyContent:"space-between" , paddingTop:"1rem"}}>
  
          
     <a href="https://youtu.be/RxymB-0iHAc" target="_blank"> <YouTubeIcon style={{color:"black"}}className="youtubeicons" sx={{fontSize:45}}/></a>
      


     <a target="_blank" href="https://github.com/Tinu01kumar/cryptocurrency_web">


     <GitHubIcon  style   ={{fontSize:"2.8rem" , color:"black"}}className="github_icons" sc={{fontSize:45}}/>
     </a> 
   





     <div className="hoverelement">
         
     <a href="https://fabulous-blini-dc9df3.netlify.app/"  target="_blank"><LinkIcon  style={{fontSize:"2.8rem" , color:"black" }} sc={{fontSize:45}}/></a>
     </div>
     </div>
   
  </div>
</div>
</li>





        
  <li className="cards_item  extra" >
  <div class="card">
  <Link>
  
  
  <div class="card_image"><img src={sofa} /></div>
  </Link>
    <div class="card_content">
      <h2 class="card_title">Ecommerce website</h2>
     
       <div style={{display:"flex" , justifyContent:"space-between" , paddingTop:"1rem"}}>
    
            
       <a target="_blank" href="https://youtu.be/I6Qinl95fbI"> <YouTubeIcon style={{color:"black"}}className="youtubeicons" sx={{fontSize:45}}/></a>
        


       <a target="_blank" href="https://github.com/Tinu01kumar/furniture">


       <GitHubIcon  style   ={{fontSize:"2.8rem" , color:"black"}}className="github_icons" sc={{fontSize:45}}/>
       </a> 
         <div className="hoverelement">
         
         <a href="https://tinu01kumar.github.io/furniture/index.html"  target="_blank"><LinkIcon  style={{fontSize:"2.8rem" ,  color:"black" }} sc={{fontSize:45}}/></a>
         </div>
      
       </div>
     
    </div>
  </div>
</li>










</ul>
</div>

    </div>
  )
}

export default Projects

