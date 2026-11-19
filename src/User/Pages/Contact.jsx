import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaLocationPin } from 'react-icons/fa6'
import { FaEnvelope, FaPaperPlane, FaPhone } from 'react-icons/fa'


function Contact() {
  return (
    <>
    <Header/>
    <div className='md:px-20 my-5 p-5'>
      <h1 className='text-center font-bold text-3xl my-5'>Contact</h1>
      <p className='text-justify'> Have Questions,feedback, or need help finding the perfect book? we'd klove to hear from you! Why contact Us ? order-related support book availabilty inquires return/replacement quries bulk/institutional purchase request Author or partership inquires .Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat dolor dignissimos esse dolorum qui facere quae dolores assumenda consequatur nobis veritatis magnam voluptatibus, voluptates rem nesciunt aliquam ratione quos veniam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt nisi ex provident quisquam ipsum vitae molestias mollitia molestiae, vero magni recusandae laborum maiores, quia totam ipsam. Illum est dolorem quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores vitae exercitationem ullam. Exercitationem ipsa, velit animi quam magni aperiam soluta ipsum itaque numquam sunt, labore cupiditate autem consequatur qui illo.</p>
      {/* grid -address ,number ,email */}
      <div className='md:grid grid-cols-3 items-center mt-5 p-5 md:px-40 md:mt-0'>

        {/* location */}
        <div className='flex justify-center items-center'>
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className=' gap-10 flex items-center justify-center  bg-gray-300'>
            <FaLocationPin/>
                      </div>
                      <p className='ms-5'>123 Main Street , Apt 48, Anytown, CA 91234</p>
        </div>

        {/* number */}
         <div className='flex items-center'>
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center  bg-gray-300'>
            <FaPhone/>
                      </div>
                      <p className='ms-5'>+09876446344</p>
        </div>
        
        {/* email */}
         <div className='flex items-center'>
          <div style={{width:'50px',height:'50px',borderRadius:'50%'}} className='flex items-center justify-center  bg-gray-300'>
            <FaEnvelope/>
                      </div>
                      <p className='ms-5'>Contact@bookstore.com</p>
        </div>
      </div>

      {/* message and map */}
      <div className='md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40'>
        {/* message */}
        <div className='bg-gray-200 text-center p-5'>
          <h1 className='font-semi-bold text-2xl'>Send Us Message!</h1>
          <form>
            <div className='mb-5 mt-5'>
              <input type="text" placeholder='Name' className='bg-white w-full p-2' />
            </div>
                <div className='mb-5 mt-5'>
              <input type="email" placeholder='Email' className='bg-white w-full p-2' />
            </div>
                <div className='mb-5 mt-5'>
              <textarea type="text" placeholder='Message' className='bg-white w-full p-2' />
            </div>
                <div className='mb-5 mt-10'>
             <button className='bg-black text-white w-full p-2 rounded flex justify-center items-center '>Submit <FaPaperPlane className='ms-2'/></button>
            </div>

            
          </form>

        
        </div>
          {/* map */}
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31403.361540754482!2d76.31105311764861!3d10.308217548045961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080269866481a9%3A0x6b5ec1dc50c0402d!2sChalakudy%2C%20Keralam!5e0!3m2!1sen!2sin!4v1795065855466!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contact
