

import React from 'react'
import Sidebar2 from '../components/Sidebar2'
import Images from '../components/ImgImport'
import ServiceContent from '../components/ContactUsContent'
import ContactUsContent from '../components/ContactUsContent'
import GallaryContent from '../components/GalleryContent'



 const Gallery = () => {
 
    
  
  return (
    <div className='row columns-reverse'>
        <div className="col-lg-9 col-12 "><GallaryContent  /></div>
        <div className="col-lg-3 col-12 sidebar-2-main"><Sidebar2 SideBarName="gallery" Img={Images.map} FirstLink="service" SecondLink="Portfolio" Path1='/about' Path2="/contact" PageName="Gallery"/></div>
    </div>
  )
}
export default Gallery;