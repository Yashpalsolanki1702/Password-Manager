import React from "react";
import "./inputCard.css";

const listColor = [
  { Hex: "#f59e0b" },
  { Hex: "#10b981" },
  { Hex: "#f97316" },
  { Hex: "#14b8a6" },
  { Hex: "#b91c1c" },
  { Hex: "#0ea5e9" },
];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class InputCard extends React.Component {
  constructor(props) {
    super(props);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.handleWebsite = this.handleWebsite.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.website = "";
    this.username = "";
    this.password = "";
  }

  handleWebsite(e) {
    this.website = e.target.value;
  }
  handleUsername(e) {
    this.username = e.target.value;
  }
  handlePassword(e) {
    this.password = e.target.value;
  }

  onClickAdd() {
    if (this.props.editID !== "") {
      this.props.Data.forEach((ele) => {
        if (ele.id === this.props.editID) {
          ele.website = document.getElementById("inputOfWebsite").value;
          ele.username = document.getElementById("inputOfUsername").value;
          ele.password = document.getElementById("inputOfPassword").value;

          document.getElementById("inputOfWebsite").value = "";
          document.getElementById("inputOfUsername").value = "";
          document.getElementById("inputOfPassword").value = "";
          this.props.onListChange(this.props.Data);
        }
      });
    } else {
      let l = this.props.Data.length - 1;
      if (this.website !== "" && this.username !== "" && this.password !== "") {
        let object = {
          id: random(11, 99),
          website: this.website,
          username: this.username,
          password: this.password,
          Hex: listColor[random(0, l)].Hex,
        };
        this.props.Data.push(object);

        document.getElementById("inputOfWebsite").value = "";
        document.getElementById("inputOfUsername").value = "";
        document.getElementById("inputOfPassword").value = "";
        this.props.onListChange(this.props.Data);
      } else if (this.website === "") {
        alert("Please, Enter a website.");
      } else if (this.username === "") {
        alert("Please, Enter a username.");
      } else if (this.password === "") {
        alert("Please, Enter a Password.");
      }
    }
  }

  render() {
    if (this.props.editID !== "") {
      this.props.Data.forEach((ele) => {
        if (ele.id === this.props.editID) {
          document.getElementById("inputOfWebsite").value = ele.website;
          document.getElementById("inputOfUsername").value = ele.username;
          document.getElementById("inputOfPassword").value = ele.password;
        }
      });
    }

    return (
      <div className="inputCard">
        <div className="addnewpassword">Add New Password</div>
        <div className="input website">
          <div className="imagDiv">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="Website Icon"
            ></img>
          </div>
          <input
            id="inputOfWebsite"
            placeholder="Enter Website"
            onChange={this.handleWebsite}
          ></input>
        </div>
        <div className="input username">
          <div className="imagDiv">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="User Icon"
            ></img>
          </div>
          <input
            id="inputOfUsername"
            placeholder="Enter Username"
            onChange={this.handleUsername}
          ></input>
        </div>
        <div className="input password">
          <div className="imagDiv">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
              alt="Lock Icon"
            ></img>
          </div>
          <input
            id="inputOfPassword"
            type="password"
            placeholder="Enter Password"
            onChange={this.handlePassword}
          ></input>
        </div>
        <div className="btn" onClick={this.onClickAdd}>
          <button>Add</button>
        </div>
      </div>
    );
  }
}

export default InputCard;
