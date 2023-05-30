import React from "react";
import "./card.css";
import Data from "../Data";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleShowpassword = this.handleShowpassword.bind(this);
    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.state = { isShow: false };
  }

  handleDelete() {
    let Id = this.props.Data.id;
    let l = Data.length;
    for (let i = 0; i < l; i++) {
      if (Data[i].id === Id) {
        Data.splice(i, 1);
        this.props.onChangeList(Data);
        return;
      }
    }
  }
  handleShowpassword() {
    this.setState((prevState) => ({ isShow: !prevState.isShow }));
  }

  handleEditEvent() {
    this.props.isEdited(this.props.Data.id);
  }

  render() {
    return (
      <div className="cardContainer">
        <div className="card">
          <div
            className="profile"
            style={{ backgroundColor: this.props.Data.Hex }}
          >
            {this.props.Data.username.slice(0, 1).toUpperCase()}
          </div>
          <div className="data">
            <div className="datadiv website">{this.props.Data.website}</div>
            <div className="datadiv username">{this.props.Data.username}</div>
            <div className="datadiv password">
              {this.props.isShowPassword || this.state.isShow ? (
                <div className="toShowPassword">{this.props.Data.password}</div>
              ) : (
                <div className="tohidePassword">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
                    alt="Hide Passwords"
                  ></img>
                </div>
              )}
            </div>
          </div>
          <div className="Icon">
            <div className="infoIcon">
              <img
                alt="info Icon"
                onClick={this.handleShowpassword}
                src="https://i.ibb.co/5T7KbWt/icons8-information-50.png"
              ></img>
            </div>
            <div className="PencilIcon">
              <img
                alt="info Icon"
                onClick={this.handleEditEvent}
                src="https://i.ibb.co/2gxwcdn/icons8-pencil-drawing-50-3.png"
              ></img>
            </div>
            <div className="deleteIcon">
              <img
                onClick={this.handleDelete}
                src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
                alt="deleteIcon"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
