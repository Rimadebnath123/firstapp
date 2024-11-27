import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');//wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.background = '#08213c';
      showAlert("Dark mode has been enable", "success")
      // document.title = 'TextUtils- Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enable", "success")
      //document.title = 'TextUtils- Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-1">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils-Word Counter, Character Counter, Remove Extra Spaces"
                  mode={mode}
                />
              }
            />
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

        </div>
      </Router>
    </>

  );
}

export default App;
