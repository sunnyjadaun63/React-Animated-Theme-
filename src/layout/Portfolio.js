import React from 'react'
import Sidebar2 from '../components/Sidebar2'
import Images from '../components/ImgImport'
import ServiceContent from '../components/ContactUsContent'
import ContactUsContent from '../components/ContactUsContent'
import PortfolioContent from '../components/PortfolioContent'



 const Portfolio = () => {
  const aboutuscont={
    Img: Images.diamond,
    FirstLink:"selectd"
  }
    
  
  return (
    <div className='row'>
        <div className="col-lg-9 col-12"><PortfolioContent  /></div>
        <div className="col-lg-3 col-12 sidebar-2-main"><Sidebar2 SideBarName="portfolio" Img={Images.trophy} FirstLink="Portfolio" SecondLink="Blogs" Path1='/portfolio' Path2="/blog" PageName="Portfolio"/></div>
    </div>
  )
}
export default Portfolio;