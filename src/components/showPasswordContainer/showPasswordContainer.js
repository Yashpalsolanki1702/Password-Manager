import React from "react";
import "./showPasswordContainer.css";
import Data from "../Data";

import Header from "./header";
import Card from "./card";
import EmptyPage from "./emptypage";

class ShowPasswordContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleShowpassword = this.handleShowpassword.bind(this);
    this.handleFilterText = this.handleFilterText.bind(this);
    this.handleEditEvent = this.handleEditEvent.bind(this);
    this.state = { filterText: "", isShowPassword: false };
  }

  handleChange(newList) {
    this.props.onListChange(newList);
  }

  handleFilterText(text) {
    this.setState({ filterText: text });
  }

  handleShowpassword(value) {
    this.setState({ isShowPassword: value });
  }

  handleEditEvent(Id) {
    this.props.onEditChange(Id);
  }

  render() {
    let filterText = this.state.filterText;

    const filteredData = [];

    Data.forEach((ele) => {
      if (ele.website.toLowerCase().includes(filterText)) {
        filteredData.push(ele);
      } else if (ele.username.toLowerCase().includes(filterText)) {
        filteredData.push(ele);
      }
    });

    const CardData = filteredData.map((ele) => {
      return (
        <Card
          key={ele.id}
          Data={ele}
          onChangeList={this.handleChange}
          isShowPassword={this.state.isShowPassword}
          isEdited={this.handleEditEvent}
        />
      );
    });

    let l = CardData.length;

    return (
      <div className="showpasswordContainer">
        <Header
          onIsShowpassword={this.handleShowpassword}
          length={l}
          onFilterTextChange={this.handleFilterText}
        />
        {l !== 0 ? <div className="carditems">{CardData}</div> : <EmptyPage />}
      </div>
    );
  }
}

export default ShowPasswordContainer;
