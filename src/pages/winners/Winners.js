import React, { Component } from "react";
import * as ErgastAPI from "./../../services/ErgastAPI";

import "./Winners.scss";

export class Winners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      year: this.props.match.params.year,
      champion: {},
      winners: []
    };
  }

  componentWillMount() {
    Promise.all([ErgastAPI.getWorldChampion(this.state.year), ErgastAPI.getWinners(this.state.year)]).then(res => {
      this.setState({
        champion: res[0].MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver,
        winners: res[1].MRData.RaceTable.Races
      });
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="ui container winners-page">
        <h1>{this.state.year} Winners</h1>
        <div className="ui four column grid centered align">
          <div className="two column row">
            <div className="ui segments five column">
              <div className="ui segment">
                <p>Top</p>
              </div>
              <div className="ui segment">
                <p>Middle</p>
              </div>
              <div className="ui segment">
                <p>Middle</p>
              </div>
              <div className="ui segment">
                <p>Middle</p>
              </div>
              <div className="ui segment">
                <p>Bottom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
