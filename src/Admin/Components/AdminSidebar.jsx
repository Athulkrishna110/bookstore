import React from 'react'
import { FaDatabase } from 'react-icons/fa'
import { FaChartSimple, FaGear } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className='bg-blue-100 md:min-h-screen py-10'>
      {/* image */}
      <div className='flex justify-center'>
        <img style={{height:'100px',width:'100px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTDens1N1kfWD71Qe4YEVaCk7BgQ28jZ2hEn0Znywgw&s=10" alt="" />
      </div>
      {/* name */}
      <div className='font-medium text-2xl my-5 text-center  '>Admin</div>
      {/* links */}
      <div className='flex flex-col justify-center items-center'>
        <div className='mt-5'>
          <Link to={'/admin'} className='flex items-center'><FaChartSimple className='me-3'/>Dashboard</Link>
        </div>
          <div className='mt-5'>
          <Link to={'/admin/resources'} className='flex items-center'><FaDatabase className='me-3'/>Collections</Link>
        </div>
          <div className='mt-5 '>
          <Link to={'/admin/settings'} className='flex items-center'><FaGear className='me-3'/>Settings</Link>
        </div>
      </div>
      
    </div>
  )
}

export default AdminSidebar
