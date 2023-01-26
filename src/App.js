import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

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
      setAlert(null)
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Light");
      setStyles({ color: "white", backgroundColor: "black" });
      setStyleNavbar({ color: "#F8F9FA", backgroundColor: "#212529" });
      setStyleTextArea({ color: "white", backgroundColor: "#212529" });
      setStyleAbout({ color: "white", backgroundColor: "black" });
      showAlert("Dark Mode Enabled", "success")

      // setInterval(() => {
      //   document.title = "Title Changing"
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Why Title Changing"
      // }, 2000);

    } else {
      setMode("light");
      setModeText("Dark");
      setStyles({ color: "black", backgroundColor: "white" });
      setStyleNavbar({ color: "#212529", backgroundColor: "#F8F9FA" });
      setStyleTextArea({ color: "black", backgroundColor: "#F8F9FA" });
      setStyleAbout({ color: "black", backgroundColor: "white" });
      showAlert("Light Mode Enabled", "success")
    }
  };

  return (
    <div style={styles}>
      <Navbar
        title="TexTxeT"
        aboutText="About TexTxeT"
        mode={mode}
        modeText={modeText}
        toggleMode={toggleMode}
        styles={styleNavbar}
        alert={alert}
      />
      <TextArea
        heading="Enter Text in the box to Analyse"
        styles={styleTextArea}
      />
      <br />
      <br />
      <About styles={styleAbout} />
    </div>
  );
}

export default App;
