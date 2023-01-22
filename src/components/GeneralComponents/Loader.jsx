import loader from "./../../assets/loader.gif";
import "./_Loader.scss";
import ReactDOM from "react-dom";

const Loader = ({ show, setShow }) => {
  return ReactDOM.createPortal(
    <section
      id="loader-container"
      style={show ? { display: "flex" } : { display: "none" }}
    >
      <button onClick={() => setShow(false)}>Hide Loader</button>
      <div className="loader">
        <img src={loader} alt="Loading..." />
      </div>
    </section>,
    document.getElementById("loader")
  );
};

export default Loader;
