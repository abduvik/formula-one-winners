import React, { Component } from "react";
import YearBox from "../../components/year-box/YearBox";

import "./Home.scss";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: [...this.getYearsRange()]
    };
  }

  /**
   * Generates the years range needed
   */
  getYearsRange = () => {
    let start = 2005;
    let end = 2015;

    let years = [];

    for (let year = start; year <= end; year++) {
      years.push(year);
    }

    return years;
  };

  generateYearsBoxes = () => {
    return this.state.years.map(year => <YearBox key={year} year={year} />);
  };

  render() {
    return (
      <div className="ui container home-page">
        <h1>Choose year to show winners</h1>
        <div className="ui stackable grid centered">{this.generateYearsBoxes()}</div>
      </div>
    );
  }
}
