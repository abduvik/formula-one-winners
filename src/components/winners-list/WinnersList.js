import React, { Component } from "react";
import * as ErgastAPI from "./../../services/ErgastAPI";
import WinnerRow from "../../components/winner-row/WinnerRow";

export default class WinnersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      year: this.props.year,
      drivers: []
    };
  }

  componentWillMount() {
    Promise.all([ErgastAPI.getWorldChampion(this.state.year), ErgastAPI.getWinners(this.state.year)]).then(res => {
      // Get the Data
      let champion = res[0].MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver;
      let drivers = res[1].MRData.RaceTable.Races.map(race => race.Results[0].Driver);

      // Remove dulpicates
      let driversDictionary = {};
      for (let driver of drivers) {
        if (!driversDictionary[driver.driverId]) {
          // Flag the World Champion
          if (driver.driverId === champion.driverId) {
            driver.champion = true;
          } else {
            driver.champion = false;
          }

          // Add Driver
          driversDictionary[driver.driverId] = driver;
        }
      }

      // Set state of the data
      this.setState({
        loaded: true,
        drivers: [...Object.values(driversDictionary)]
      });

    });
  }

  generateWinnersRow = () => {
    return this.state.drivers.map(driver => <WinnerRow key={driver.driverId} driver={driver} />);
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
