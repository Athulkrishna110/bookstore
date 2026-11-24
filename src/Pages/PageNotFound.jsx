import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='min-h-screen flex justify-center items-center flex-col'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi4eDCxDYJwdfFt9e411wKVXynY0hL5aLxfqkhTXzQLg&s=10" alt="pagenotfound" />

      <p>Oh No!</p>
      <h1 className='text-2xl font-medium'>Look Like Your'e Lost</h1>
      <p>The page you are looking for is not available</p>
      <Link to={'/'} className='bg-black text-white mt-3 px-5 py-2 rounded '> Home</Link>
     
    </div>
  )
}

export default PageNotFound
