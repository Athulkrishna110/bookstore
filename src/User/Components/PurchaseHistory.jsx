import React from 'react'

function PurchaseHistory() {
  return (
    <div>
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
                    <img width={'120px'} height={'120px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-HpDD4dJFuoj5uV2jhL6TCisvtPqdNgKOnQYsQ443zg&s=10" alt="purchase" />


                </div>
            </div>

            {/* 2nd section */}
            <div className='px-5 mt-5 md:mt-0'>
                <img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4HeJT-9o_GvAuODzmOH_BQaUMnH2-cORI25SHHLYGDQ&s=10" alt="no image" />
                           </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default PurchaseHistory
