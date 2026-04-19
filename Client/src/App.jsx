import { ToastContainer } from 'react-toastify'
import { Routes, Route, Navigate } from 'react-router-dom' 
import Landing from './Pages/Landing'
import USER_STORE from './Stores/User.store.js'
import ChatInterface from './Pages/ChatInterface'
import Login from './Pages/Login.jsx'
import { useEffect } from 'react'

const App = () => {

  const user = USER_STORE((state) => state.user)
  const checkAuth = USER_STORE((state) => state.checkAuth)

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  return (
    <main>
      <ToastContainer toastStyle={{backgroundColor : "black", color : "white"} }/>
      <Routes>
        <Route path='/' element={ user === null ? <Landing /> : <Navigate to={'/Chat-Interface'}/>} />
        <Route path='/login' element={ user === null ? <Login /> : <Navigate to={'/Chat-Interface'}/> } />
        <Route path='/Chat-Interface' element={ user === null ? <Navigate to={'/login'}/> :  <ChatInterface />} />
      </Routes>
    </main>
  )
}

export default App