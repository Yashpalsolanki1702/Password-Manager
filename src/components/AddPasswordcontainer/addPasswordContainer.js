import React from "react";
import "./addPasswordContainer.css";
import InputCard from "./inputCard";

class AddPasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onAddElement = this.onAddElement.bind(this);
  }

  onAddElement(newList) {
    this.props.onListChange(newList);
  }

  render() {
    return (
      <div className="allAddPasswordContainer">
        <div className="mobileUserPasswordImage">
          <img
            alt="User Password"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png "
          ></img>
        </div>
        <div className="inputcontainer">
          <InputCard
            Data={this.props.Data}
            onListChange={this.onAddElement}
            editID={this.props.editID}
          />
        </div>
        <div className="desktopUserPasswordImage">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="userpasswordimage"
          ></img>
        </div>
      </div>
    );
  }
}

export default AddPasswordContainer;
