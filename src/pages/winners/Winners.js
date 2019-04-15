import React, { Component } from "react";
import * as ErgastAPI from "./../../services/ErgastAPI";

import "./Winners.scss";
import WinnerRow from "../../components/winner-row/WinnerRow";

export class Winners extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      year: this.props.match.params.year,
      races: []
    };
  }

  componentWillMount() {
    Promise.all([ErgastAPI.getWorldChampion(this.state.year), ErgastAPI.getWinners(this.state.year)]).then(res => {
      // Get the Data
      let champion = res[0].MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
      let races = res[1].MRData.RaceTable.Races;

      // Flag the World Champion;
      races = races.map(race => {
        if (race.Results[0].Driver.driverId === champion.driverId) {
          race.Results[0].Driver.champion = true;
        } else {
          race.Results[0].Driver.champion = false;
        }
        return race;
      });

      // Set state of the data
      this.setState({
        loaded: true,
        races: races
      });

      console.log(this.state);
    });
  }

  generateWinnersRow = () => {
    return this.state.races.map(race => <WinnerRow key={race.raceName} race={race} />);
  };

  render() {
    return (
      <div className="ui container winners-page">
        <h1>{this.state.year} Winners</h1>
        <div className="ui four column grid centered align">
          <div className="two column row">
            <div className="ui segments five column">
              {this.state.loaded ? (
                this.generateWinnersRow()
              ) : (
                <div className="ui segment">
                  <img className="ui wireframe image" src="/assets/short-paragraph.png" alt="loading paragraph" />
                  <div className="ui active loader" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
