export default function About(props) {
  return (
    <>
      <div className="container my-3 py-3" style={props.styles}>
        <div className="accordion" id="accordionExample" style={props.styles}>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={props.styles}
              >
                <b>About TexTxeT</b>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={props.styles}>
                TexTxeT is an amazing utility to manipulate your text. You can
                convert your text in Uppercase, Lowercase, Titlecase. You can
                also URL Encode and Decode your text, count words, characters,
                spaces and preview it nicely.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
