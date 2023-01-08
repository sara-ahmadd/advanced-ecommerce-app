import { NavLink } from "react-router-dom";
import "./_Contact.scss";
import { BiLocationPlus } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineTwitter } from "react-icons/ai";

const Contact = () => {
  return (
    <section className="container" id="contact">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleFormControlName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlName"
            placeholder="your full name"
          />
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
          <label htmlFor="exampleFormControlSubject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlSubject"
            placeholder="Subject"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlMessage" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlMessage"
            rows="3"
          ></textarea>
        </div>
        <input className="btn submit-btn" type="submit" value="Submit" />
      </form>
      <div className="contact-text">
        <div className="card mt-2">
          <div className="card-body">
            <h5 className="card-title">Our Contact Information</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <ul className="media-list">
              <li>
                <div className="media-listitem-container">
                  <i>
                    <BsFillTelephoneFill />
                  </i>
                  <p>+555-333-444</p>
                </div>
              </li>
              <li>
                <div className="media-listitem-container">
                  <i>
                    <BiLocationPlus />
                  </i>
                  <p>Our Location</p>
                </div>
              </li>
              <li>
                <div className="media-listitem-container">
                  <i>
                    <HiOutlineMail />
                  </i>
                  <p>OurCompany@company.com</p>
                </div>
              </li>
              <li>
                <div className="media-listitem-container">
                  <i>
                    <AiOutlineTwitter />
                  </i>
                  <p>@CompanyOfficial</p>
                </div>
              </li>
            </ul>
            <NavLink to="/" className="card-link">
              Home
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
