import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDeatail = (props) => {
    const {name,email}= props.location.state.contact;
  return (
      <div className="main">
          <div className="ui card centered">
              <div className="image">
                  <img src={user} alt="user"/>
              </div>
              <div className="content">
                  <div clasName="header"> Swathi</div>
                  <div clasName="description"> Swathi@gxjhsk.com</div>
              </div>
          </div>
          <Link to="/">
            <div className="center div">
                <button className="ui button blue">Back to Contact List</button>
            </div>
          </Link>

      </div>
  );
    
};

export default ContactDeatail;