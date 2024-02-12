import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import myContext from './useContext';


const Signup = () => {
 const [err, setErr]= useState(false);
 const navigate=useNavigate();

  const [details, setDetails]= useState({
    firstName:"",
    number:"",
    email:"",
    password:"",
    company:""
  })

  function handleInput(e){
    const name=e.target.name;
    setDetails((prev)=>({...prev, [name]:e.target.value}));
  }
  
function handleClick(e){
   e.preventDefault();

   const emailRegex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   const passRegex= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

   if(details.firstName==="")
        alert("fill the first name");
   else if(details.number==="")
      alert("fill the number")
    else if( details.email==="")
       alert("fill the email")
    else if( !details.email.match(emailRegex))
       alert("Email format is Incorrect") 
    else if(details.password==="")  
        alert("fill the Password");
    else if( !details.password.match(passRegex))
        alert("Password format is Incorrect") 
     else if(details.company==="") 
       alert("fill the company name")
     else
        setErr(true);

    if(err==true)
    {
     setAuth( prev=>({ name:details.firstName, email:details.email, password:details.password }) )
      navigate('/profile') 
    }  
      

}

const {setAuth}=useContext(myContext);

  return (
    <div className=' flex justify-center' >
      <div className='mt-[10%] sm:mt-5 w-96 mx-[6%] ' >
        <div className='' >

            <h1 className='text-3xl font-bold'  > Signin to your</h1>
            <h1 className='text-3xl font-bold '  > PopX account</h1>
        

        </div >

        <div className=' mt-6 '>
          <form>
             
          <fieldset className="border shadow-sm  rounded-md border-solid  border-gray-300 p-">
           <legend  className='ml-2  text-sm font-bold text-purple-600 ' > First Name </legend>
           <input type="text" name="firstName" onChange={handleInput}  className='pb-2 pl-3 w-full outline-none ' placeholder="Enter First Name"/>
         
            </fieldset>
            
            <fieldset className="border shadow-sm rounded-lg mt-5 border-solid border-gray-300 p-">
           <legend className='ml-2 text-sm font-bold text-purple-600 ' > Phone Number </legend>
           <input type="text" onChange={handleInput} name="number"  className='pb-2 pl-3 w-full outline-none' placeholder="Enter Number"/>
            </fieldset>


          <fieldset className="border shadow-sm   mt-5  rounded-md border-solid  border-gray-300 p-">
           <legend  className='ml-2  text-sm font-bold text-purple-600 ' >Email Address</legend>
           <input type="email" name="email"  onChange={handleInput} className='pb-2 pl-3 w-full outline-none ' placeholder="Enter email address"/>
            </fieldset>
            
            <fieldset className="border shadow-sm rounded-lg mt-4 border-solid border-gray-300 p-">
           <legend className='ml-2 text-sm font-bold text-purple-600 ' >Password</legend>
           <input type="password" onChange={handleInput} name='password' className='pb-2 pl-3 w-full outline-none' placeholder="Enter password"/>
            </fieldset>

            <fieldset className="border shadow-sm rounded-lg mt-5 border-solid border-gray-300 p-">
           <legend className='ml-2 text-sm font-bold text-purple-600 ' > Company Name </legend>
           <input type="text"  onChange={handleInput} name='company' className='pb-2 pl-3 w-full outline-none' placeholder="Enter Company Name"/>
            </fieldset>

            <div className='mt-5  font-medium'>
                <p className='w-auto'> Are you an Agency?</p>
                <div className='mt-2'>
                <input type="radio" name='choose' className=' ' /> <span>Yes</span>
                <input type="radio" name='choose' className=' ml-16 ' /> <span>No</span>
                </div>
            </div>

              <div className=' mt-64 sm:mt-5 w-full h-full flex justify-center items-end '>
              <input onClick={handleClick} className=' cursor-pointer shadow-md  w-full mt-5 p-3 bg-blue-500 rounded-lg font-bold text-white' type="button" value="Create Account" />
              </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup