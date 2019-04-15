import React, { Component } from "react";
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="ui red stackable menu inverted segment">
          <div className="ui container">
            <div className="item app-name">
              <i className="image outline icon" />
              Formula One Winners
            </div>
            <a
              className="item"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/AbdelrahmanSE/formula-one-winners"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </header>
    );
  }
}
