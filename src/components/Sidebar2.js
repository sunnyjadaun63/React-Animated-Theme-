import React from 'react'
import Images from './ImgImport'
import { AiFillCaretLeft,AiFillCaretRight,AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Sidebar2 = ({SideBarName,PageName,Img,FirstLink,SecondLink,Path1,Path2}) => {
  return (
    <div className={`sidebar-2 `} data-aos="fade-left">
        <div className={`sidebar-compo-${SideBarName} sidebar-compo`}>
          <Link to='/'> <AiOutlineClose className='cross'/></Link> 
             <div className="circle-div"></div>
        <h4 className="sidebar-text rotate-text">{PageName}</h4>
        <img src={Img} alt="" className="img-about" />
        <div className="button-div-two row px-0 mx-0">
            <div className="button-1-div col-6 px-0"><Link className='dec-none' to={Path1}><AiFillCaretLeft/>{FirstLink}</Link></div>
          <div className="button-2-div col-6 px-0"><Link className='dec-none' to={Path2}>{SecondLink}<AiFillCaretRight/></Link> </div>
        </div>
        </div>
        </div>
  )
}

export default Sidebar2