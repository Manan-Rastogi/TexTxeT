import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Light");

  const [styles, setStyles] = useState({
    color: "black",
    baclgroundColor: "white",
  });

  const [styleNavbar, setStyleNavbar] = useState({
    color: "black",
    baclgroundColor: "white",
  });

  const [styleTextArea, setStyleTextArea] = useState({
    color: "black",
    baclgroundColor: "white",
  });

  const [styleAbout, setStyleAbout] = useState({
    color: "black",
    baclgroundColor: "white",
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ message: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      document.body.style = `background: black;`; // Look for a better way to do so in future.
      setMode("dark");
      setModeText("Light");
      setStyles({ color: "white", backgroundColor: "black" });
      setStyleNavbar({ color: "#F8F9FA", backgroundColor: "#212529" });
      setStyleTextArea({ color: "white", backgroundColor: "#212529" });
      setStyleAbout({ color: "white", backgroundColor: "black" });
      showAlert("Dark Mode Enabled", "success");

      // setInterval(() => {
      //   document.title = "Title Changing"
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Why Title Changing"
      // }, 2000);
    } else {
      document.body.style = `background: white;`;
      setMode("light");
      setModeText("Dark");
      setStyles({ color: "black", backgroundColor: "white" });
      setStyleNavbar({ color: "#212529", backgroundColor: "#F8F9FA" });
      setStyleTextArea({ color: "black", backgroundColor: "#F8F9FA" });
      setStyleAbout({ color: "black", backgroundColor: "white" });
      showAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <div style={styles}>
      <Router>
        <Navbar
          title="TexTxeT"
          aboutText="About"
          mode={mode}
          modeText={modeText}
          toggleMode={toggleMode}
          styles={styleNavbar}
          alert={alert}
        />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <TextArea
                heading="Enter Text in the box to Analyse"
                styles={styleTextArea}
                alertHandle={showAlert}
              />
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={<About styles={styleAbout} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
