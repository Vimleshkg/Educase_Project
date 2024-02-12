import React, { useContext } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Avatar } from '@mui/material'
import myContext from './useContext';

const Profile = () => {
const {Auth}= useContext(myContext);

  return (
    <div className=' flex justify-center   ' >
    <div className='sm:mt-[2%] sm:w-[40%]  sm:mx-[6%] border shadow-md ' >
    <div className='  bg-white ml-5 py-3 font-medium ' ><h1>Account Settings</h1></div>
      <div className= 'mb-2 h-screen bg-gray-100 ' > 
        <div className='pl-5 my-1 py-5 border-b px-1 border-gray-300 border-dashed '>
          <div className='flex '>
            < Avatar  style={{ width: '54px', height: '54px' }}  className='mr-4  ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsc-jcTFFXeEobwxQFKQNTbvby7JoNRDh_5M_pHx2QpXG0t77nCVwUlmUsfxrU9vdySFo&usqp=CAU"/>
            <div className=' -mt-1 '>
              <h1 className='font-bold'> {Auth.name} </h1>
              <p className='font-medium text-sm'> {Auth.email} </p>
            </div>
          </div>
           <p className='pt-6 pb-4'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, exercitationem. Enim, est ab iste, incidunt magnam ad quae fugit repudiandae odio, debitis fugiat molestias 
           </p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Profile