import React from 'react'
import Sidebar2 from '../components/Sidebar2'
import Images from '../components/ImgImport'
import ServiceContent from '../components/ContactUsContent'
import ContactUsContent from '../components/ContactUsContent'



 const ContactUs = () => {
  const aboutuscont={
    Img: Images.diamond,
    FirstLink:"selectd"
  }
    
  
  return (
    <div className='row'>
        <div className="col-lg-9 col-12"><ContactUsContent  /></div>
        <div className="col-lg-3 col-12 sidebar-2-main"><Sidebar2 SideBarName="contact" Img={Images.map} FirstLink="service" SecondLink="Portfolio" Path1='/about' Path2="/contact" PageName="Contact"/></div>
    </div>
  )
}
export default ContactUs;