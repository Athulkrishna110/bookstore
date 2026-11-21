import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaCircle } from 'react-icons/fa'
import { FaCircleCheck } from 'react-icons/fa6'
import Edit from '../Components/Edit'

function Profile() {
  const[currentTab,setCurrentTab]=useState()
  return (
    <>
    <Header />
      <div style={{height:'200px'}} className='bg-black'>
        </div>
        <div style={{height:'230px',width:'230px',borderRadius:'50%', marginLeft:'75px',marginTop:'-130px'}} className='bg-white p-3'>
      
      <img style={{height:'200px',width:'200px',borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTDens1N1kfWD71Qe4YEVaCk7BgQ28jZ2hEn0Znywgw&s=10" alt=" user" />
      </div>
      <div className='flex justify-between px-20 mt-5'>
        <div className='flex items-center' >
       <h1 className='font-bold md:text-3xl text-2xl'>USERNAME</h1>
       <FaCircleCheck className='text-blue-800'/>
      </div>
      <Edit />
      </div>
     <p className='text-xl font-bold px-20 mt-5'>Bio</p>
     <p className='itext-justify-center md:px-20 px-5 my-5'>This is your personal where you can manage your account, explore your reading activity,track your orders,and save book you love. whether you're building a wishlist discocering new arrivals,or reviewing your recent purchases, this page keeps evrything organized and easy to access. your reading journey continues here -enjoy,exploring,discovering and collecting stories that inspire you.</p>
     <div className='flex justify-center items-center my-8 font-bold text-lg'>
      <p onClick={()=>(setCurrentTab(1))} className={ currentTab==1?'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-3 border-gray-200 border-b rounded cursor-pointer'}>Upload Book</p>
      <p  onClick={()=>(setCurrentTab(2))} className={ currentTab==2?'p-3 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-3 border-gray-200 border-b rounded cursor-pointer'}>Upload Book Status</p>
      <p onClick={()=>(setCurrentTab(3))} className={ currentTab==3?'p-3 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-3 border-gray-200 border-b rounded cursor-pointer'}>Purchase History</p>
     </div>
    {currentTab==1&& <div>upload Books </div>}
    {currentTab==2&& <div>upload Book status</div>}
     {currentTab==3&&<div>Purchase History</div>}
      <Footer/>
    </>
  )
}

export default Profile
