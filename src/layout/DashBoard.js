import React from 'react'
import BasicSidebar from '../components/BasicSidebar'
import DashboardContent from '../components/DashboardContent'

const DashBoard = () => {
  return (
    <div className='row'>
        <div className="col-lg-6 "><DashboardContent/></div>
       <div className="col-lg-6 my-sidebar"><BasicSidebar/></div>
        
    </div>
  )
}

export default DashBoard