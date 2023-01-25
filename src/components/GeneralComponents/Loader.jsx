import loader from "./../../assets/loader.gif";
import "./_Loader.scss";
import ReactDOM from "react-dom";

const Loader = ({ show, setShow }) => {
  return ReactDOM.createPortal(
    <section id="loader-container">
      <div className="loader">
        <img src={loader} alt="Loading..." />
      </div>
    </section>,
    document.getElementById("loader")
  );
};

export default Loader;
