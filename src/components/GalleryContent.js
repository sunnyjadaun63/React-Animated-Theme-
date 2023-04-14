import React, { useEffect, useState } from 'react'
import Images from './ImgImport'
import Aos from 'aos';
import 'aos/dist/aos.css'
import BlogData from './BlogData';

import { AiFillPlayCircle,AiFillPauseCircle, AiOutlineFastForward } from "react-icons/ai";
import SwiperCard from './SwiperCard';
import Footer from './Footer';
import ScrollSlide from './ScrollSlide';

const GallaryContent = () => {

    
    const [Data, setData] = useState([]);
   
  
    
    
  useEffect(()=>{
    Aos.init({duration:1000});


    setData(BlogData)
    
    
      },[])

      
    //   button active 
      
      

     
      
  
  return (
    <div>
        <div className="container">
                <div className=" col-lg-8 col-md-10 col-12 mx-auto py-3">
                 <div className="row">
                    
                  
                  <div className="scroll-slide">
                  <ScrollSlide/></div> 
                  </div>

                   
                 </div>
                 <div className="col-lg-7 col-md-10 col-12 mx-auto my-sm-4 py-3">
                  <div className=" row">
                    <div className="col-lg-6 col-md-10 col-12  px-lg-5 mx-auto f">
                    <div className="mygallery-items">
                      <img src="https://images.unsplash.com/photo-1679380896255-15710c9ff7a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />
                      <h6 className="my-gallery-head">Product Photography</h6>
                      <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                    </div>
                    <div className="mygallery-items">
                      <img src="https://images.unsplash.com/photo-1679725677928-f73a9501cb8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80" alt="" />
                      <h6 className="my-gallery-head">Features</h6>
                      <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.</p>
                    </div>
                    </div>
                   
                    <div className="col-lg-6 col-md-10 col-12 px-lg-5 mx-auto">
                    <div className="mygallery-items">
                      <img src="https://images.unsplash.com/photo-1679725677928-f73a9501cb8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80" alt="" />
                      <h6 className="my-gallery-head">Software Controlled</h6>
                      <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain</p>
                    </div>
                    <div className="mygallery-items">
                      <img src="https://images.unsplash.com/photo-1679380896255-15710c9ff7a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="" />
                      <h6 className="my-gallery-head">lorem hsfdgdhfg</h6>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eius eos quasi delectus dignissimos, consequuntur ullam doloribus praesentium minima quo recusandae sequi obcaecati nihil cumque eaque nulla quidem, molestiae unde aliquid. Quam eius dolores aliquam, praesentium itaque reprehenderit. Est quasi doloribus aliquam fugiat temporibus quos impedit eius neque voluptas error.</p>
                    </div>
                    </div>
                    
                  </div>
                 </div>


            <div className="row">
                <div  className="col-lg-10 col-md-10 col-12 mx-auto py-3 " >
                <Footer       FooterName='gallery'/>
                </div>
               
            </div>
            
        </div>
    </div>
    
    
  )
}

export default GallaryContent