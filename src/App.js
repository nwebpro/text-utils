import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Alert Message Function
  const showAlert = (message, type) => {
    setAlert({
      msg:  message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  // Dark Mode Enabled Function
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark mode has been enabled', 'success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert('Light mode has been enabled', 'success');
    }
  }
  return (
    <>
      {/* <Navbar title='TextUtils' aboutText='About Us' /> */}
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-5">
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} formHeading='Enter the text to analyze below' mode={mode} />
      </div>
    </>
  );
}

export default App;
