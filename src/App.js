import React ,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');//wheather dark mode is enable or not
  const[alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode ==='light'){
      setMode('dark');
      document.body.style.background='#08213c';
      showAlert("Dark mode has been enable","success")
      // document.title='TextUtils- Dark Mode';
      // setInterval(()=>{
      //   document.title='TextUtils is Amazing Mode';
      // },2000)
      // setInterval(()=>{
      //   document.title='Install TextUtils Now';
      // },1500)
    }
    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has been enable","success")
      // document.title='TextUtils- Light Mode';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Router>
      <Navbar title="TextUtils"  mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-1">
        <Routes>
          {/* /users-->component 1
          /users-/home  -->component 2 */}
            <Route exact path="/about" element={<About   mode={mode}/>} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter,Character Counter,Remove extra spaces" mode={mode} />} />
            {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
          </Routes>
        </div>
      </Router>
    </>
    
  );
}

export default App;
