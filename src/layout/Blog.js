import React from 'react'
import Sidebar2 from '../components/Sidebar2'
import Images from '../components/ImgImport'
import ServiceContent from '../components/ContactUsContent'
import ContactUsContent from '../components/ContactUsContent'
import BlogContent from '../components/BlogContent'



 const Blog = () => {
  const aboutuscont={
    Img: Images.diamond,
    FirstLink:"selectd"
  }
    
  
  return (
    <div className='row'>
        <div className="col-lg-9 col-12"><BlogContent  /></div>
        <div className="col-lg-3 col-12 sidebar-2-main"><Sidebar2 SideBarName="blog" Img={Images.pencil} FirstLink="Portfolio" SecondLink="Gallery" Path1='/portfolio' Path2="/gallery" PageName="Blogs"/></div>
    </div>
  )
}
export default Blog;