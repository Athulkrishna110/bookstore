import React from 'react'

function UploadStatus() {
  return (
    <div className='p-30 my-15 shadow rounded'>
      {/* duplicate book status */}
      <div className='bg-gray-100 rounded p-5 mt-4'>
        <div className='md:grid grid-cols-[3fr_1fr]'>
            {/* 1st section */}
        <div className='px-4'>
                <h1 className='text-2xl'>Title</h1>
                <h1 className='text-xl'>Author</h1>
                <h1 className='text-lg text-blue-600'>$ Price</h1>
                <p className='font-bold'>Abstract :</p>
                <div className='flex'>
                    <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2ZCWRN8eHQzmhbGrFocR4--l7VkLvePn-1-gSBQbzw&s=10" alt="" />

                                        <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJad-nDhZ9tTuL0vEznhLR3v30ASNltqHxsuq0hHsv5w&s=10" alt="" />


                    <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI72_Pg8VY8TSia_XcmjKdetFZuVQDi5Lvsd5C6ad_4w&s=10" alt="" />

                </div>
            </div>

            {/* 2nd section */}
            <div className='px-5 mt-5 md:mt-0'>
                <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4HeJT-9o_GvAuODzmOH_BQaUMnH2-cORI25SHHLYGDQ&s=10" alt="no image" />
                <div className='flex justify-end'>
                    <button className='bg-red-600 text-white font-bold px-3 py-2 rounded mt-5'>DELETE</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default UploadStatus
