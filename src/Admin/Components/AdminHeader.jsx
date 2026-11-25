import React from 'react'
import { FaPowerOff } from 'react-icons/fa'
import { TbMarquee } from 'react-icons/tb'

function AdminHeader() {
  return (
 <>
<div className='flex justify-between items-center p-3 md:px-20'>
   {/* Header  top*/}
   {/* logo */}
    <div className='flex items-center'>
          <img width={'50px'}  height={'50px'}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTevoJaRWWyDzT_Dd7PJDIDhRhKNKFor1UmnybWyH_Q_w&s=10" alt="LOGO" />
          <h1 className='text-2xl ms-3 font-bold '>BOOKSTORE</h1>
        </div>
      {/* logout */}
      <button className='bg-black text-white px-3 py-2 rounded flex items-center hover:bg-white hover:text-black font-bold'>Logout <FaPowerOff className='ms-3'/></button>
</div>
    {/* Header marquee */}
 <div className='bg-black text-white p-3'>
<marquee>Welcome Admin, Your all set to manage and monitor the system. let's get into work!!!</marquee>
 </div>
 </>
  )
}

export default AdminHeader
