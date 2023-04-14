import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = ({FooterName}) => {
  useEffect(()=>{
Aos.init({duration:1000});
  },[])
  return (
   <div className="footer" data-aos="fade-left">
    
    <div className="upper-part">
      <h6 className="footer-head">Start your next project with us</h6>
      <p className="footer-para">Start your next project with us</p>
      <button className="btn-boot-4">Join Forelskets</button>
    </div>
    <div className={`bottom-part-${FooterName}`} ></div>
   </div>
  )
}

export default Footer