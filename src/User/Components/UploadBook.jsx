import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBook() {
  return (
    <div className='bg-gray-200 p-10 my-20 mx-50'>
        <h1 className='text-center text-3xl font-medium'>Update Book Details</h1>
{/* grid */}
<div className='md:grid grid-cols-2 mt-10 w-full'>
    {/* 1st section */}
    <div className='px-5'>
     <div className='mb-3'>
        <input type="text" placeholder='Book Title' className='w-full p-2 bg-white rounded'/>
     </div>

       <div className='mb-3'>
        <input type="text" placeholder='Author' className='w-full p-2 bg-white rounded'/>
     </div>

       <div className='mb-3'>
        <input type="text" placeholder='Book Cover Image URL' className='w-full p-2 bg-white rounded'/>
     </div>

       <div className='mb-3'>
        <input type="text" placeholder='Total Pages' className='w-full p-2 bg-white rounded'/>
     </div>

       <div className='mb-3'>
        <input type="text" placeholder='Original Price' className='w-full p-2 bg-white rounded'/>
     </div>

       <div className='mb-3'>
        <input type="text" placeholder='Discount Price' className='w-full p-2 bg-white rounded'/>
     </div>

       <div className='mb-3'>
        <textarea rows={'5'} type="text" placeholder='Abstract' className='w-full p-2 bg-white rounded'/>
     </div>


    </div>
    {/* 2nd section */}
    <div>
  <div className='mb-3'>
        <input type="text" placeholder='Publisher' className='w-full p-2 bg-white rounded'/>
     </div>

       <div className='mb-3'>
        <input type="text" placeholder='ISBN' className='w-full p-2 bg-white rounded'/>
     </div>

       <div className='mb-3'>
        <input type="text" placeholder='Language' className='w-full p-2 bg-white rounded'/>
     </div>

       <div className='mb-3'>
        <input type="text" placeholder='Category' className='w-full p-2 bg-white rounded'/>
     </div>

     {/* upload book images */}
     <div className='my-10 flex justify-center items-center'>
        <label htmlFor="bookimages">
            <input type="file" id='bookimages' hidden />
            <img width={'200px'} height={'200px'} style={{borderRadius:'50%'} } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCnh6P0vPF-QGPF4nIMUzE3REKkDRvpXVwNVLGKFI6yA&s=10" alt="no image" />
        </label>
     </div>
     {/* preview uploaded images */}
     <div className='justify-center items-center mb-3'>
                    <img width={'70px'} height={'70px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4HeJT-9o_GvAuODzmOH_BQaUMnH2-cORI25SHHLYGDQ&s=10" alt="bookcard" />

                    <label htmlFor="bookupload">
                      <input type="file" id='bookupload' />
                      <FaPlus className='text-2xl ms-3'/>
                    </label>

     </div>
    </div>
</div>

{/* resert and add books */}
<div className='flex md:justify-end mt-10 px-5 justify-center w-full'>
  <button className='bg-gray-600 text-white px-3 py-2 rounded hover:bg-white hover:text-gray-600'>RESET</button>
  <button className='bg-blue-600 text-white px-3 py-2 rounded hover:bg-white hover:text-gray-600 m-5'>ADD BOOK DETAILS</button>
</div>
    </div>
  )
}

export default UploadBook
