import React from "react";
import "./container.css";
import Data from "./Data";

import AddPasswordContainer from "./AddPasswordcontainer/addPasswordContainer";
import ShowPasswordContainer from "./showPasswordContainer/showPasswordContainer";

class Container extends React.Component {
  constructor() {
    super();
    this.state = { list: Data, editID: "" };
    this.onAdd = this.onAdd.bind(this);
    this.onEditID = this.onEditID.bind(this);
  }

  onAdd(newList) {
    this.setState({ list: newList });
    this.setState({ editID: "" });
  }

  onEditID(Id) {
    this.setState({ editID: Id });
  }

  render() {
    return (
      <div className="container">
        <div className="containerforAddPassword">
          <AddPasswordContainer
            Data={this.state.list}
            onListChange={this.onAdd}
            editID={this.state.editID}
          />
        </div>
        <div className="containerforShowPassword">
          <ShowPasswordContainer
            onListChange={this.onAdd}
            onEditChange={this.onEditID}
          />
        </div>
      </div>
    );
  }
}

export default Container;
