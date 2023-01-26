import PropTypes from "prop-types";
import Alert from "./Alert";

export default function Navbar(props) {
  
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
        style={{ color: props.styles.color }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  {props.aboutText}
                </a>
              </li>
            </ul>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.modeText} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
      <Alert alert={props.alert} />
    </>
  );
}

// Proptypes to set the types of props fields we are accepting.
Navbar.propTypes = {
  title: PropTypes.string.isRequired, // isRequired is quite self explainatory
  aboutText: PropTypes.string.isRequired,
};

// We can set also default proptypes here.
Navbar.defaultProps = {
  title: "Title Here",
  aboutText: "Aboout Here",
};
