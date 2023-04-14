import React, { useEffect, useState } from 'react'
import Images from './ImgImport'
import Aos from 'aos';
import 'aos/dist/aos.css'
import GalleryData from './GallaryData';

import { AiFillPlayCircle,AiFillPauseCircle } from "react-icons/ai";
import SwiperCard from './SwiperCard';
import Footer from './Footer';

const PortfolioContent = () => {

    
    const [Data, setData] = useState([]);
    const [Collection, setCollection] = useState([])
  
    
    
  useEffect(()=>{
    Aos.init({duration:1000});


    setData(GalleryData)
    setCollection([... new Set(GalleryData.map((item)=>item.type))])
    
      },[])

      const filterData=(itemClicked)=>{
        const filterGallery=GalleryData.filter((item)=> item.type==itemClicked)
        setData(filterGallery)
       
      }

    //   button active 
      const btns= document.querySelectorAll('.catagory-btn');

      let activeBtn=null
      btns.forEach((element) => {
        element.addEventListener('click', function() {
          if (activeBtn) {
            activeBtn.classList.remove('active');
          }
          element.classList.add('active');
          activeBtn = element;
        });
      });
      

      console.log(btns)
      
  
  return (
    <div>
        <div className="container">
                <div className="col-lg-8 col-md-10 col-12 mx-auto py-3">
                 <div className="row">
                    <div className="category-btns">
                    <button className="catagory-btn active " onClick={()=>setData(GalleryData)} >All</button>
                    
{
    Collection.map((value)=>{
        return <>
        
        <button className={`catagory-btn `} onClick={()=>filterData(value)}>{value}</button>
        </>
    })
}
                    </div>
                    <div className="gallary-images">
                        {Data.map((val)=>{
                            return <>
                            <div className="grid-img" data-aos="fade-right">
                            <img src={val.image} alt="" className="gallery-img" />
                            
                            </div>
                           
                            </>
                        })}
                    </div>
                 </div>


            <div className="row">
                <div  className="col-lg-10 col-md-10 col-12 mx-auto py-3 " >
                <Footer       FooterName='portfolio'/>
                </div>
               
            </div>
            
        </div>
    </div>
    </div>
    
  )
}

export default PortfolioContent