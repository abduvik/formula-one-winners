import React, { Component } from "react";
import * as ErgastAPI from "./../../services/ErgastAPI";
import WinnerRow from "../../components/winner-row/WinnerRow";

export default class WinnersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      year: this.props.year,
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
    });
  }

  generateWinnersRow = () => {
    return this.state.races.map(race => <WinnerRow key={race.raceName} race={race} />);
  };

  render() {
    return this.state.loaded ? (
      this.generateWinnersRow()
    ) : (
      <div className="ui segment">
        <img className="ui wireframe image" src="/assets/short-paragraph.png" alt="loading paragraph" />
        <div className="ui active loader" />
      </div>
    );
  }
}
