import React, { useEffect, useState } from 'react'
import Images from './ImgImport'
import Aos from 'aos';
import 'aos/dist/aos.css'
import BlogData from './BlogData';

import { AiFillPlayCircle,AiFillPauseCircle, AiOutlineFastForward } from "react-icons/ai";
import SwiperCard from './SwiperCard';
import Footer from './Footer';

const BlogContent = () => {

    
    const [Data, setData] = useState([]);
   
  
    
    
  useEffect(()=>{
    Aos.init({duration:1000});


    setData(BlogData)
    
    
      },[])

      
    //   button active 
      
      

     
      
  
  return (
    <div>
        <div className="container">
                <div className="col-lg-8 col-md-10 col-12 mx-auto py-3">
                 <div className="row">
                    <h4 className="blog text-center mb-4">Our Top <b>Blog</b></h4>
                   
                    <div className="Blog-Cards">
                        {Data.map((val)=>{
                            return <>
                            <div className="grid-blog-img" data-aos="fade-right">
                            <img src={val.image} alt="" className="blog-img" />
                            <div className="text-wrapper">
                               <p className="whys-">{val.heading}</p> 
                               <a href="" className="li-read">Read More <AiOutlineFastForward/></a>
                            </div>
                            </div>
                           
                            </>
                        })}
                    </div>
                 </div>


            <div className="row">
                <div  className="col-lg-10 col-md-10 col-12 mx-auto py-3 " >
                <Footer       FooterName='blog'/>
                </div>
               
            </div>
            
        </div>
    </div>
    </div>
    
  )
}

export default BlogContent