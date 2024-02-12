import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div className='h-screen flex justify-center' >
      <div className='relative sm:mt-[5%] p-2 h-full w-full sm:h-[80%]  flex flex-col justify-end items-center'>
         
       <div className=' relative m-4  mb-8 flex flex-col items-center '>
        <div className='flex flex-col mr-10'>
        <h1 className='sm:text-2xl text-3xl my-2 font-bold'>Welcome to PopX</h1>
        <h3 className=' font-bold  text-gray-400 '>Lorem, ipsum doloor siit amet, consecteetur adipisiicing ellit.</h3>
        </div>
        <div className='flex mt-5  w-full flex-col'>
           <Link to='/signup'> <button className='my-2 rounded-lg text-sm sm:text-base text-white font-bold w-full bg-blue-600  py-2'>Create Account</button> </Link> 
          <Link to='/login'>  <button className='mb-2 rounded-lg text-sm w-full sm:text-base font-bold bg-purple-400  py-2'>Already Registered? Login</button>   </Link> 
        </div>
        </div>

      </div>
   </div>

  )
}

export default Main