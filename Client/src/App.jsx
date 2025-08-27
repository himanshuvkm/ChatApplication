import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import SignUp from './pages/Signup/signup'
import Sidebar from './components/Sidebar/sidebar'
import Home from './pages/Home/Home'
import { Toaster } from 'react-hot-toast'  
import { useAuthContext } from './context/AuthContetx'

function App() {
  const { authUser } = useAuthContext();
  return (
  <div className='p-4 h-screen flex items-center justify-center'>
    <Routes>
      <Route path='/' element={authUser ? <Home /> : <Navigate to='/login' />} />
      <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login />} />
      <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp />} />
    </Routes>
    <Toaster
  position="bottom-right"
  reverseOrder={false}
/>
  </div>
  )
}

export default App