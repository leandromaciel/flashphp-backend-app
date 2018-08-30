import React, { Component, Fragment } from "react";
import "./Dashboard.css";
import MainMenu from "../MainMenu/MainMenu";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      //listIds: localStorage.getItem('userListIds').split(",").map(Number)
    }
  }
  
  render() {
    return (
      <Fragment>
        <MainMenu />
        <div className="Dashboard">
          <div className="lander">
            <h1>FlashCommerce</h1>
          </div>
        </div>
      </Fragment>
    )
  }
}
