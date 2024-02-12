import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from './useContext';

const Login = () => {
  const {Auth}=useContext(myContext);

  const emailRegex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const passRegex= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/

  const [err, setErr]= useState(false);
  const navigate=useNavigate();
 
   const [details, setDetails]= useState({
     email:"",
     password:"",
   })
 
   function handleInput(e){
     const name=e.target.name;
     setDetails((prev)=>({...prev, [name]:e.target.value}));
   }
   
 function handleClick(e){
    e.preventDefault();
 
    if(details.email==="")
        alert("fill the email")
    else if( !details.email.match(emailRegex))
       alert("Email format is Incorrect") 
     else if(details.password==="")  
         alert("fill the Password");
     else if( !details.password.match(passRegex))
         alert("Password format is Incorrect") 
      else if( Auth.email != details.email || Auth.password != details.password)
         alert("Email or password is incorrect, If you don't have Account then First SignUp  ")   
        
      else
         setErr(true);
 
     if(err==true)
       navigate('/profile')  
        
 }




  return (
    <div className=' flex justify-center ' >
      <div className='mt-[10%] w-96 mx-[6%] ' >
        <div className='' >

            <h1 className='text-3xl font-bold'  > Signin to your</h1>
            <h1 className='text-3xl font-bold '  > PopX account</h1>
        
            <p className=' mt-2 text-lg mr-20 font-bold text-gray-400' >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

        </div >

        <div className=' mt-5 '>
          <form>

          <fieldset className="border shadow-sm  rounded-md border-solid  border-gray-300 p-">
           <legend  className='ml-2  text-sm font-bold text-purple-600 ' >Email Address</legend>
           <input type="email" name="email"  onChange={handleInput}   className='pb-2 pl-3 w-full outline-none ' placeholder="Enter email address"/>
            </fieldset>
            
            <fieldset className="border shadow-sm rounded-lg mt-3 border-solid border-gray-300 p-">
           <legend className='ml-2 text-sm font-bold text-purple-600 ' >Password</legend>
           <input type="password" name="password"  onChange={handleInput} className='pb-2 pl-3 w-full outline-none' placeholder="Enter password"/>
            </fieldset>

            <input  onClick={handleClick} className='cursor-pointer hover:bg-blue-500 bg-gray-300 shadow-md w-full mt-5 p-3 rounded-lg font-bold text-white' type="button" value="Login" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
