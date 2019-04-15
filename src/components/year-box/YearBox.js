import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./YearBox.scss";

class YearBox extends Component {
  winnersRoute = () => {
    this.props.history.push("/winners/" + this.props.year);
  };

  render() {
    return (
      <div className="four wide column YearBox" onClick={this.winnersRoute}>
        <div className="ui tall stacked segment">
          <h2 className="ui huge header">
            <i className="globe icon" />
            <div className="content">{this.props.year}</div>
          </h2>
        </div>
      </div>
    );
  }
}

export default withRouter(YearBox);
