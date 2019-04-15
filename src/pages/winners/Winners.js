import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Winners.scss";
import WinnersList from "../../components/winners-list/WinnersList";

export class Winners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      year: this.props.match.params.year
    };
  }

  render() {
    return (
      <div className="ui container winners-page">
        <div className="ui four column grid centered align">
          <div className="two column row">
            <div className="five column">
              <Link to="/">&larr; Go Back</Link>
              <h1>{this.state.year} Winners</h1>
            </div>
          </div>
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
