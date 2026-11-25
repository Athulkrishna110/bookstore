import React from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaPen } from 'react-icons/fa'

function AdminSettings() {
   return (
    <>
    <AdminHeader />
      <div className='md:grid grid-cols-5'>
        {/* 1st section -1 grid */}
        <div className='col-span-1'>
          <AdminSidebar />
        </div>
        {/* 2nd section 4 grid */}
        <div className='col-span-4 p-10'>
          <h1 className='text-3xl font-bold text-center mb-10'>Settings</h1>
          <div className='md:grid grid-cols-2 items-center'>
            {/* 1st section */}
            <div>
              <h2 className='text-2xl font-bold mb-10'>Welcome, Admin 👋</h2>
              <p className='text-justify'>This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p> 
              <h4 className='my-5 font-bold text-lg'>🔧 What You Can Manage in This Section:</h4>
              <ul>
              <li>✏️ Update personal details (name, email, role, profile picture)</li>
              <li>🔐 Change or reset your password</li>
              <li>📢 Configure notification and alert preferences</li>
              <li>👥 Manage permissions based on assigned access level</li>
              <li>🧩 Customize dashboard visibility and layout</li>
              </ul>
              <p className='text-justify my-10'>Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>
            </div>
            {/* 2nd section */}
            <div className='flex flex-col justify-center items-center my-5 '>
                          <label htmlFor="userprofile">
                            <input type="file" id='userprofile'  hidden/>
                            <img style={{height:'150px', width:'150px',borderRadius:'50%'}}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTDens1N1kfWD71Qe4YEVaCk7BgQ28jZ2hEn0Znywgw&s=10" alt="user" />
                            <button style={{marginLeft:'115px',marginTop:'-30px'}} className='bg-black  text-white px-2 py-2 rounded '><FaPen/></button>
                          </label>
                          {/* username */}
                          <div className='mt-10 mb-3 w-full px-5'>
                            <input type="text" placeholder='Username' className='w-full bg-gray-200 rounded p-2'/>
                          </div>
                          {/* password */}
                           <div className=' mb-3 w-full px-5'>
                            <input type="password" placeholder='Password' className='w-full bg-gray-200 rounded p-2'/>
                          </div>
                          {/* new password */}
                           <div className=' mb-3 w-full px-5'>
                            <input type="password" placeholder='Confirm password' className='w-full bg-gray-200 rounded p-2'/>
                          </div>
                       
                            
                            {/* reset & update */}
                            <div className='flex justify-end mt-5 px-5 w-full'>
                              <button className='bg-orange-600 text-white px-5 py-2 font-bold rounded'>RESET</button>
                              <button className='bg-green-800 text-white px-5 py-2 font-bold rounded ms-5'>UPDATE</button>
                            </div>
                         
                        </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AdminSettings
