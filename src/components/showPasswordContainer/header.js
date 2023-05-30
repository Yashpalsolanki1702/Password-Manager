import React from "react";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this);
    this.handleSearchText = this.handleSearchText.bind(this);
  }

  handleEvent(e) {
    this.props.onIsShowpassword(e.target.checked);
  }

  handleSearchText(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
      <div>
        <div className="showpasswordheader">
          <div className="showpasswordtitle">
            Your Passwords {<span>{this.props.length}</span>}
          </div>
          <div className="searchBar">
            <div className="searchBarImg">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search icon"
              ></img>
            </div>
            <input
              placeholder="Search"
              onChange={this.handleSearchText}
            ></input>
          </div>
        </div>
        <div className="breakdiv"></div>
        <div className="showPasswordInput">
          <input type="checkbox" onClick={this.handleEvent}></input>
          <span>Show Passwords</span>
        </div>
      </div>
    );
  }
}

export default Header;
