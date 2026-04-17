import { ToastContainer } from 'react-toastify'
import { Routes, Route } from 'react-router-dom' 
import Landing from './Pages/Landing'
import USER_STORE from './Stores/User.store.js'
import ChatInterface from './Pages/ChatInterface'

const App = () => {

  const user = USER_STORE((state) => state.user)

  return (
    <main>
      <ToastContainer />
      <Routes>
        <Route path='/' element={ user === null ? <Landing /> : <ChatInterface />} />
      </Routes>
    </main>
  )
}

export default App