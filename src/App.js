import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// components
import SignUp from './components/signup/SignUp.jsx';
import Welcome from './components/welcome/Welcome.jsx';
import Succeed from './components/succeed/Succeed.jsx';

function App() {
  return (
    <div className="App">
      <div className='Container'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Welcome />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/succeed' element={<Succeed />} />
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;