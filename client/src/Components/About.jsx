import React from 'react'

import  styled from 'styled-components';
import Headword from './Headword';
import ster from "./Images/ster.png";
const Aboutsec=styled.div`


max-width: 1300px;
padding: 0px 80px;
margin: 5rem auto;

`

const Aboutme=styled.div`
position: relative;
text-align: center;
margin-bottom:60px;
padding-bottom: 20px;
font-size: 40px;
font-family: 'Spectral', serif;;
font-weight: 600;

::before{
    content: "";
    position: absolute;
    background: #111;
    bottom: 0px;
    left: 50%;
    width: 180px;
   
    height: 3px;
    transform: translateX(-50%);
}

::after{
    content: "who am i";
    position: absolute;
    bottom: -12px;
    left: 50%;
    font-size: 20px;
    color: crimson;
    padding: 0 5px;
    background: #fff;
    transform: translateX(-50%);
}
`

const Image =styled.img`
height: 10rem;
float:left;
margin-right:2rem



`

const Aboutcontent=styled.div`

font-size: 1.3rem;
font-family: 'Ubuntu', sans-serif;
font-weight: 500;

`


const About = () => {
  return (
    <Aboutsec id="test2">
       
      <Headword name="About" />
      <Image src={ster}></Image>
      <Aboutcontent><p>I am self motivated and result driven individual with strong academic credentials and highly engage in online competition like codechef ,hackerearth ,leetcode, Geeks for Geeks and also have diverse background of extra co-curricular activities. I invested my time on learning new technology like full stack web development and Machine learning and also work on my overall personality development. Posses strong leadership skills along with the ability to deal creativity and practically with issues</p></Aboutcontent>
    </Aboutsec>
  )
}

export default About







































// // Import necessary libraries and components
// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import Header from './Header';
// import Footer from './Footer';
// import axios from 'axios';
// import { ClipLoader } from 'react-spinners';
// import { css } from '@emotion/react';
// import DeleteIcon from '@mui/icons-material/Delete';
// import imageupload from "./Images/imageupload.jpeg";
// import { useUserContext } from './UserProvider';

// // Styled components for your UI
// const PageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
// `;

// const Card = styled.div`
//   width: 70%;
//   max-width: 600px;
//   padding: 20px;
//   margin: 20px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   border-radius: 10px;
//   background-color: #fff;
// `;

// const Uploadimage = styled.img`
//   width: 6rem;
//   height: auto;
// `;

// const Container = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
//   gap: 10px;
// `;

// const ImageWrapper = styled.div`
//   margin: 10px;
// `;

// const Image = styled.img`
//   max-width: 100%;
//   max-height: 100%;
//   border-radius: 8px;
  
// `;

// const StyledLabel = styled.label`
//   cursor: pointer;
//   background-color: red;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   display: flex;
//   align-items: center; /* Align the content vertically */
// `;

// const CustomFileInput = styled.input`
//   display: none;
// `;

// const UploadButton = styled.button`
//   cursor: pointer;
//   padding: 0px 30px;
//   background-color: #3498db;
//   color: #fff;
//   font-size: 1rem;
//   border: none;
//   border-radius: 5px;
// `;

// const CardContainer = styled.div`
//   display: grid;
//   margin-top: 2rem;
//   grid-template-columns: repeat(auto-fit, minmax(300px, 0fr));
//   gap: 10px;
//   justify-content: space-around;
// `;

// const ImageCard = styled.div`
// border: 1px solid #ccc;
// padding: 20px;
// text-align: center;
// background-color: #fff;
// box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
// transition: transform 0.2s;

// &:hover {
//   transform: scale(1.05);
// }
// `;

// const DeleteButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   background-color: red;
//   color:white;
//    border:none;
//    font-size:1.3rem;
//   padding: 5px;
//   text-align:center;
//   border-radius:6px;

//   cursor: pointer;
// `

// const ViewImage = styled.img`
//   max-width: 100%;
//   height: 200px;
// `;

// // Additional CSS for the ClipLoader
// const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

// const ImageUpload = () => {
//   const { user } = useUserContext();
//   const [file, setFile] = useState(null);
//   const [image, setImage] = useState();
//   const [galleryImages, setGalleryImages] = useState([]);
//   const [loading, setLoading] = useState(false); // Add loading state

//   const handleImageUpload = async () => {
//     console.log("User Email:", user.email);
//     if (file) {
//       const formData = new FormData();
//       formData.append('file', file);
//       formData.append('email', user.email);
  
//       // Set loading to true when starting the upload
//       setLoading(true);
  
//       try {
//         const res = await axios.post("http://localhost:9000/imageupload", formData);
//         console.log(res);
//         if (res.data && res.data.length > 0 && res.data[0].image) {
//           // Reset the file state after a successful upload
//           setFile(null);
//           // Update the gallery images state with the new image
//           setGalleryImages(prevImages => [...prevImages, res.data[0].image]);
//           // Set the main image state to the newly uploaded image
//           setImage(res.data[0].image);
//         } else {
//           console.error('Invalid response data:', res.data);
//         }
//       } catch (err) {
//         console.error(err);
//       } finally {
//         // Set loading back to false when the upload is complete
//         setLoading(false);
//       }
//     }
//   };
  

//   const handleImageDelete = (index) => {
//     const imageToDelete = galleryImages[index];

//     // Make a DELETE request to the backend to delete the image
//     axios.delete(`http://localhost:9000/deleteimage/${user.email}/${imageToDelete}`)
//       .then(() => {
//         // Remove the deleted image from the galleryImages state
//         setGalleryImages((prevImages) => prevImages.filter((_, i) => i !== index));
//       })
//       .catch((err) => console.error(err));
//   };

//   useEffect(() => {
//     axios.get(`http://localhost:9000/getimages/${user.email}`)
//       .then((res) => {
//         if (res.data && res.data.length > 0) {
//           // Set the first image in the gallery as the main image
//           setImage(res.data[0].image);
//           // Set the gallery images state with all images
//           setGalleryImages(res.data.map((item) => item.image));
//         } else {
//           // No images found, reset the image and galleryImages state
//           setImage(null);
//           setGalleryImages([]);
//         }
//       })
//       .catch((err) => console.error(err));
//   }, [user.email, galleryImages]);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   return (
//     <div>
//       <Header />
//       <PageContainer>
//         <Card>
//           <Container>
//             <ImageWrapper>
//               {loading ? (
//                 <ClipLoader
//                   css={override}
//                   size={50}
//                   color={"#3498db"}
//                   loading={loading}
//                 />
//               ) : (
//                 <Image src={`http://localhost:9000/images/` + image} alt="Uploaded" />
//               )}
//             </ImageWrapper>
//             <StyledLabel>
//               <Uploadimage src={imageupload} alt="Icon" />
//               <CustomFileInput type="file" onChange={handleFileChange} />
//             </StyledLabel>
//             <UploadButton onClick={handleImageUpload}>Upload</UploadButton>
//           </Container>
//         </Card>
//       </PageContainer>

//       <div>
//         <h1 style={{ fontSize: "1.9rem", color: "black" }}>View Gallery</h1>
//         <CardContainer>
//           {galleryImages.map((galleryImage, index) => (
//             <ImageCard key={index}>
//               <DeleteButton onClick={() => handleImageDelete(index)}>
//               <DeleteIcon/>
//               </DeleteButton>
//               <ViewImage src={`http://localhost:9000/images/` + galleryImage} alt={`Gallery Image ${index}`} />
//             </ImageCard>
//           ))}
//         </CardContainer>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ImageUpload;
