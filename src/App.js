import React, { useState } from 'react'
import Main from './Main'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'
import myContext from './useContext'

const App = () => {

  const [Auth, setAuth]= useState({email:"",password:""});

  const myRouter= createBrowserRouter([
    {
      path:'/',
      element:<Main/>
    } ,
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/profile',
      element:<Profile/>
    }
    
    ])
  return (
     < myContext.Provider value={{Auth, setAuth}}  >
    <RouterProvider router={myRouter}>
    <div>
   
    </div>
    </RouterProvider>
    </myContext.Provider>

  )
}

export default App