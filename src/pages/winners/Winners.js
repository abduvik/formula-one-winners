import React, { Component } from "react";

import "./Winners.scss";
import WinnersList from "../../components/winners-list/WinnersList";

export class Winners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      year: this.props.match.params.year,
      races: []
    };
  }

  render() {
    return (
      <div className="ui container winners-page">
        <h1>{this.state.year} Winners</h1>
        <div className="ui four column grid centered align">
          <div className="two column row">
            <div className="ui segments five column">
              <WinnersList year={this.state.year} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
