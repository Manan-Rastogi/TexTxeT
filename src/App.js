import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <TextArea heading="Enter Text in the box to Analyse"/>
    </>
  );
}

export default App;
