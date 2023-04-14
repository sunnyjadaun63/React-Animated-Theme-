import React from 'react'
import Sidebar2 from '../components/Sidebar2'
import AboutUsContent from '../components/AboutUsContent'
import Images from '../components/ImgImport'



const AboutUs = () => {
  const aboutuscont={
    Img: Images.diamond,
    FirstLink:"selectd"
  }
    
  
  return (
    <div className='row columns-reverse'>
        <div className="col-lg-9 col-12"><AboutUsContent  /></div>
        <div className="col-lg-3 col-12 sidebar-2-main"><Sidebar2 SideBarName="about" Img={Images.diamond} FirstLink="Contact Us" SecondLink="Home" Path1='/' Path2="/" PageName="About us"/></div>
    </div>
  )
}

export default AboutUs