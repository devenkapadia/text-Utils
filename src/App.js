import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import Alert from "./components/Alert";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [btn, setbtn] = useState("Dark Mode");
  const [alert, setAlert] = useState(null)

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light')
      setbtn('Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode"
    }
    else {
      setMode('dark')
      setbtn('Light Mode')
      document.body.style.backgroundColor = '#0a1727'
      showAlert("Dark Mode has been enabled", "success")
      // document.title = "TextUtils - Dark Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Utils" mode={mode} btn={btn} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-8">
          <Switch>
            <Route exact path="/">
              <Textform showAlert={showAlert} heading="Enter The Text to Analyze" mode={mode} />
            </Route>
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
