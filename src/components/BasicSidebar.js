import React, { useEffect } from 'react'
import Images from './ImgImport'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'


const BasicSidebar = () => {
    useEffect(()=>{
        Aos.init({duration:1000});
          },[])
  return (
    <div>
        <div className="row side-bar" data-aos="fade-left">
            
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 sidebar-colums " >
                <div className="circle-div"></div>
                <img src={Images.diamond} className='sidebar-img' alt="" />
                <Link to='/about'><h4 className="sidebar-text">About </h4></Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 sidebar-colums" >
            <div className="circle-div"></div>
                <img src={Images.thunder} className='sidebar-img' alt="" />
                <Link to='/service'><h4 className="sidebar-text">Services </h4></Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 sidebar-colums" >
            <div className="circle-div"></div>
                <img src={Images.map} className='sidebar-img' alt="" />
                <Link to='/contact'><h4 className="sidebar-text">Contact </h4></Link>
            </div>
            
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 sidebar-colums" >
            <div className="circle-div"></div>
                <img src={Images.trophy} className='sidebar-img' alt="" />
                <Link to='/portfolio'><h4 className="sidebar-text">Portfolio </h4></Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 sidebar-colums" >
            <div className="circle-div"></div>
                <img src={Images.pencil} className='sidebar-img' alt="" />
                <Link to='/blog'><h4 className="sidebar-text">Blog </h4></Link>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6 col-12 sidebar-colums">
            <div className="circle-div"></div>
                <img src={Images.camera} className='sidebar-img' alt="" />
                <Link to='/gallery'><h4 className="sidebar-text">Gallery </h4></Link>
            </div>
        </div>
    </div>
  )
}

export default BasicSidebar