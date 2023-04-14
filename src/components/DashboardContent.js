import React, { useEffect } from 'react'
import Images from './ImgImport'
import Aos from 'aos'
import 'aos/dist/aos.css'

const DashboardContent = () => {
  useEffect(()=>{
    Aos.init({duration:1000});
      },[])
  return (
    <div className='dashboard-content'>
        
<lottie-player src="https://assets7.lottiefiles.com/packages/lf20_w51pcehl.json" mode="bounce" background="transparent"  speed="1"  style={{width:"100%",height:'100%'}}  loop  autoplay></lottie-player>
        <h1 className="dashboard-text-head" data-aos="fade-up"><div className="text-gredient">UX  With Sunny  </div></h1>
        <p className="dashboard-text-p" data-aos="fade-in">At Forelskets, we believe everyone deserves to have a amazing user friendly website or online store</p>
       <p className='d-flex'><a href="" className="call-now-link">CALL: +012-745-874 </a> <a href="" className="call-now-2">Chat Now</a></p> 
    </div>
  )
}

export default DashboardContent