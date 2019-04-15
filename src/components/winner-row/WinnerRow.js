import React, { Component } from "react";

import './WinnerRow.scss';

export default class WinnerRow extends Component {
  render() {
    console.log(this.props.driver);
    const firstName = this.props.driver.givenName;
    const lastName = this.props.driver.familyName;
    const wikipediaLink = this.props.driver.url;
    const isChampion = this.props.driver.champion;
    return (
      <div className="ui segment winner-row">
        <h3 className="ui header">
          {firstName} {lastName} {isChampion ? <i className="star icon" title="World Champion"></i> : ""}
          <div className="sub header">
            {isChampion ? <div>(World Champion)</div> : ""}
            <a href={wikipediaLink} target="_blank" rel="noopener noreferrer">
              {wikipediaLink}
            </a>
          </div>
        </h3>
      </div>
    );
  }
}
