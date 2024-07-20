import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar.js';
import TextForm from './component/TextForm.js';
import Alert from './component/Alert.js';
import About from './component/About.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // Whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [text, setText] = useState('DarkMode');

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      setText('LightMode');
      document.title = 'Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      setText('DarkMode');
      document.title = 'Light Mode';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} text={text} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the Text to Analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
