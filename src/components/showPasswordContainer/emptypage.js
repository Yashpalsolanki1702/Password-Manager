import React from "react";
import "./emptypage.css";

class EmptyPage extends React.Component {
  render() {
    return (
      <div className="emptypage">
        <div className="emptyImage">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
            alt="No Result"
          ></img>
        </div>
        <div>No Passwords</div>
      </div>
    );
  }
}

export default EmptyPage;
