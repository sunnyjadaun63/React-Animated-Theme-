import React, { useEffect, useState } from 'react'
import Images from './ImgImport'
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../assets/css/slider.css'

import { AiFillPlayCircle,AiFillPauseCircle } from "react-icons/ai";
import SwiperCard from './SwiperCard';
import Footer from './Footer';

const AboutUsContent = () => {
  const [isPlaying, setisPlaying] = useState(false)

  function PlayVideo(){
    const video= document.querySelector('#myVid')
    if(!isPlaying){
      video.play()
    }
    else{
      video.pause()
    }
    setisPlaying(!isPlaying)
  }
  useEffect(()=>{
    Aos.init({duration:1000});
      },[])
  
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 col-12 mx-auto py-3">
                    <h4 className="about-us-text" data-aos="fade-up-left">The Story of <span className="">Forelskets</span> </h4>
                    <div className=" video-section-div" data-aos="fade-up">
                    <video width="100%" className='video-section' id='myVid' src={Images.space}  >
                    
                    </video>
                    {isPlaying ? (
        <AiFillPauseCircle id="playButton" onClick={PlayVideo} />
      ) : (
        <AiFillPlayCircle id="playButton" onClick={PlayVideo} />
      )}
                    
</div>
<h6 className="to-fute">To Infinity and Beyond!</h6>
<p className="customesr">At Forelskets, we believe there is a way where customers are earned rather thanbought. We're obsessively passionate about it, and our mission is to help you achieve it.</p>
<p className="was-founded">Froelskets was founded by  Subham sharma . It was called the world's first bootstrap four
template, and started as a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam illo, magni <br />
aut recusandae perspiciatis quam sed eveniet, debitis tempore natus corrupti nostrum deserunt,
harum in dolor dolorem sit voluptatum iusto. recusandae perspiciatis quam sed eveniet, debitis <br />
tempore natus corrupti nostrum recusandae perspiciatis quam sed eveniet, debitis tempore.</p>

                </div>
               
            </div>
            <div className="row">
            <div className="col-lg-8 col-md-10 col-12 mx-auto py-3">
            <div className="row shadows">
                            <div className="col-md-4 px-3">
                                <div className="shadow-card" data-aos="fade-right">
                                    <img src={Images.bulb} alt="" className="shadow-card-img" />
                                </div>
                                <h6 className="text-decee">64,973</h6>
                            </div>
                            <div className="col-md-4 px-3">
                                <div className="shadow-card" data-aos="fade-down">
                                    <img src={Images.cloud} alt="" className="shadow-card-img" />
                                </div>
                                <h6 className="text-decee">64,973</h6>
                            </div>
                            <div className="col-md-4 px-3">
                                <div className="shadow-card" data-aos="fade-left">
                                    <img src={Images.cup} alt="" className="shadow-card-img" />
                                </div>
                                <h6 className="text-decee">64,973</h6>
                            </div>
                        </div>
                 
                  </div>
                 
            </div>
            <div className="row">
            <h4 className="meet-our-team">Meet Our Team</h4>
            <div className="col-lg-4 col-md-8 col-12 mx-auto py-3">
                  <div className="row">
                    
                    <SwiperCard/>
                  </div>
                  </div>
            </div>
            <div className="row">
                <div  className="col-lg-10 col-md-10 col-12 mx-auto py-3 " >
                <Footer       FooterName='about'/>
                </div>
               
            </div>
            
        </div>
    </div>
  )
}

export default AboutUsContent