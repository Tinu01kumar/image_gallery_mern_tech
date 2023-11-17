import React from 'react'
import  './App.css';
import Headword from './Headword';
const Timeline = () => {
  return (
    <div>
     <Headword name="The Timeline" />
    <div className="timeline">





<div className="container left"  >
  <div className="content" style={{ backgroundColor:"aqua" ,boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)"}}>
  <h2>2023</h2>
  <p>currently looking for an opportunity , improving  my skills and knowledge , doing more dsa quesions, And eagerly watiting to actual get into IT WORLD , so to implement my knowlege and enhance the productivity  of my work. </p>
</div>
  </div>
  <div className="container right">
    <div className="content" style={{backgroundColor:"#E384FF" ,   boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)"}}>
      <h2>2022 , Resume & Sep</h2>
      <p>I had Started moving on the path of Data science. explore  many tools and Technologies like python , ML , Deep Learning , Data visualization and many more related to this field. In the month of sep i started working on project i.e MOVIE RECOMMENDATION SYSTEM based on cosine similarity, After making project and gaining computer fundatmental knowledge  started making RESUME    </p>
    </div>
  </div>
  
  <div className="container left">
  <div className="content" style={{  backgroundColor:"#B7CADB" , boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)"}}>
      <h2>2021 , Mar & Aug </h2>
      <p> I had started making Ecommerce website and complete this project within one month , after that i came to know responsive website , so started working on it.
      Onwards, my all project are highly responsive in all device , from march to august i  pratice small project in both frontend and backend and in the month of Aug started working on full stack project i.e BLogging website & Netflex clone.</p>
    </div>
  </div>
  <div className="container right">
    <div className="content" style={{ backgroundColor:"#FFF9B0" , boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)"}}>
      <h2>2021 Working on it</h2>
      <p>After exploration i had decided  to learn Full stack web development along with some programming languages like c and c++  </p>
    </div>
  </div>
  <div className="container left">
   
<div className="content" style={{backgroundColor:"#0CECDD" ,   boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.2)"}}>
<h2>2020 , Commencement</h2>
<p>Beginning my Engineering journey as a computer science student </p>
</div>
  </div>
</div>
</div>
  )
}

export default Timeline



