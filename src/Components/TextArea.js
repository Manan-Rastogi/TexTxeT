import { useState } from "react";

export default function TextArea(props) {
  // Destructuring states.
  const [text, setText] = useState("Enter your Text here.");

  // Handling states - any change in textarea.
  const handleOnChangeTextArea = (event) => {
    setText(event.target.value);
  };

  // Handling states - clicking on change button.
  const handleOnClickUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  return (
    <>
      <div className="container mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          //   placeholder="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nulla ipsa voluptatum tenetur assumenda magnam rem. Maiores eveniet dignissimos, blanditiis minima, et laborum eum eaque voluptatem molestiae nihil temporibus tenetur eligendi tempore atque nulla.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam provident, deserunt recusandae cum, iusto voluptas, optio sunt ad mollitia eos ea expedita ipsum veniam ipsa velit voluptatibus quidem omnis nam?"
          value={text}
          onChange={handleOnChangeTextArea}
        ></textarea>
        <button
          className="btn btn-primary my-5 mx-2"
          onClick={handleOnClickUpperCase}
        >
          UPPER CASE
        </button>
        <button className="btn btn-primary my-5 mx-2">lower case</button>
        <button className="btn btn-primary my-5 mx-2">Title Case</button>
        <button className="btn btn-primary my-5 mx-2">Count Words</button>
      </div>
    </>
  );
}
