
import './App.css'
import {ToastContainer} from 'react-toastify'
import {Route, Routes} from 'react-router-dom'
import SignIn from './pages/signup/SignIn'
import SignUp from './pages/signup/SignUp'
function App() {

  return (
    <div>
      <Routes>
        {/* public route */}
        <Route path="/" element={<SignIn/>}/>
        {/* private route */}
        <Route path="/sign-up" element={<SignUp/>}/>
      </Routes>
      <ToastContainer/>
    </div>

  )
}

export default App
