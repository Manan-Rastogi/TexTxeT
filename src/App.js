import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

function App() {
  const [mode, setMode] = useState("light");
  const [modeText, setModeText] = useState("Light")

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
  })

  const [styleAbout, setStyleAbout] = useState({
    color: "black",
    baclgroundColor: "white",
  })

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeText("Light")
      setStyles({ color: "white", backgroundColor: "black" });
      setStyleNavbar({ color: "#F8F9FA", backgroundColor: "#212529" });
      setStyleTextArea({ color: "white", backgroundColor: "#212529" });
      setStyleAbout({ color: "white", backgroundColor: "black" });
    } else {
      setMode("light");
      setModeText("Dark")
      setStyles({ color: "black", backgroundColor: "white" });
      setStyleNavbar({ color: "#212529", backgroundColor: "#F8F9FA" });
      setStyleTextArea({ color: "black", backgroundColor: "#F8F9FA" });
      setStyleAbout({ color: "black", backgroundColor: "white" });
    }
  };

  return (
    <div style={styles}>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        modeText={modeText}
        toggleMode={toggleMode}
        styles={styleNavbar}
      />
      <TextArea heading="Enter Text in the box to Analyse" styles={styleTextArea}/>
      <br />
      <hr />
      <br />
      <About styles={styleAbout}/>
    </div>
  );
}

export default App;
