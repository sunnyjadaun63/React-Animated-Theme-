import React from 'react'
import Sidebar2 from '../components/Sidebar2'
import Images from '../components/ImgImport'
import ServiceContent from '../components/Servicecontent1'



 const Services = () => {
  const aboutuscont={
    Img: Images.diamond,
    FirstLink:"selectd"
  }
    
  
  return (
    <div className='row'>
        <div className="col-lg-9 col-12"><ServiceContent  /></div>
        <div className="col-lg-3 col-12 sidebar-2-main"><Sidebar2 SideBarName="service" Img={Images.thunder} FirstLink="about Us" SecondLink="Contact" Path1='/about' Path2="/contact" PageName="Services"/></div>
    </div>
  )
}
export default Services;