import { useState } from "react";



export default function TextArea(props) {
  // Destructuring states.
  const [text, setText] = useState("Enter your Text here.");

  // Handling states - any change in textarea.
  const handleOnChangeTextArea = (event) => {
    setText(event.target.value);
  };

  const handleOnClickLowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
  };

  // Handling states - clicking on change button.
  const handleOnClickUpperCase = () => {
    let upperText = text.toUpperCase();
    setText(upperText);
  };

  const handleOnClickTitleCase = () => {
    var titleText = text.toLowerCase().split(/\s+/);
    for (var i = 0; i < titleText.length; i++) {
      if (titleText[i] === "") {
        continue;
      }
      titleText[i] = titleText[i][0].toUpperCase() + titleText[i].slice(1);
    }

    setText(titleText.join(" "));
  };

  const handleOnClickURLEncode = () => {
    let urlEncodedText = encodeURIComponent(text);
    setText(urlEncodedText);
  };

  const handleOnClickURLDecode = () => {
    let urlEncodedText = decodeURIComponent(text);
    setText(urlEncodedText);
  };

  const handleOnClickCopyText = () =>{
    let copyText = text
    navigator.clipboard.writeText(copyText)

    props.alertHandle("Text Copied to Clipboard.", "success")
  }


  return (
    <>
      <div className="container my-4 mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          //   placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla ipsa voluptatum tenetur assumenda magnam rem. Maiores eveniet dignissimos, blanditiis minima, et laborum eum eaque voluptatem molestiae nihil temporibus tenetur eligendi tempore atque nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam provident, deserunt recusandae cum, iusto voluptas, optio sunt ad mollitia eos ea expedita ipsum veniam ipsa velit voluptatibus quidem omnis nam?"
          value={text}
          onChange={handleOnChangeTextArea}
          style={props.styles}
        ></textarea>
        <button disabled={text.length === 0}
          className="btn btn-primary mt-4 mx-2"
          onClick={handleOnClickUpperCase}
        >
          UPPER CASE
        </button>
        <button disabled={text.length === 0}
          className="btn btn-primary mt-4 mx-2"
          onClick={handleOnClickLowerCase}
        >
          lower case
        </button>
        <button disabled={text.length === 0}
          className="btn btn-primary mt-4 mx-2"
          onClick={handleOnClickTitleCase}
        >
          Title Case
        </button>

        <button disabled={text.length === 0}
          className="btn btn-primary mt-4 mx-2"
          onClick={handleOnClickURLEncode}
        >
          URL Encode
        </button>

        <button disabled={text.length === 0}
          className="btn btn-primary mt-4 mx-2"
          onClick={handleOnClickURLDecode}
        >
          Decode URL Encoded
        </button>

        <button disabled={text.length === 0}
          className="btn btn-primary mt-4 mx-2"
          onClick={handleOnClickCopyText}
        >
          Copy Text
        </button>

        <div className="container mt-5">
          <div>
            <h2>Text Summary</h2>
            <p>
              This text has{" "}
              {
                text.split(/\s+/).filter((wordCount) => {
                  return wordCount !== "";
                }).length
              }{" "}
              words, {text.length} characters and {text.split(" ").length - 1}{" "}
              spaces.
            </p>
          </div>
          <div>
            <h3>Reading Time</h3>
            <p>
              Time to read this section is{" "}
              {0.008 *
                text.split(" ").filter((wordCount) => {
                  return wordCount !== "";
                }).length}{" "}
              minutes
            </p>
          </div>
          <div>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Nothing to Preview."}</p>
          </div>
        </div>
      </div>
    </>
  );
}
