
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import Home from './Home';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - Dark mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light mode'
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        {/* <Routes> */}

          {/* <Route exact path="/about"
            element={<About />}/> */}

        {/* <Route path="/"element={}/> */}
        <TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces & Much More!" mode={mode}/>
        

        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );

}

export default App;
