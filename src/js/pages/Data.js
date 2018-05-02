import React from "react";

export default class Data extends React.Component {
  render() {
    console.log("data");
    
    // var MySportsFeeds = require("mysportsfeeds-node");
    // var msf = new MySportsFeeds("1.2", true);

    // msf.authenticate("gms08", "");
    
    // var Data = msf.getData('nba', '2016-2017-regular', 'player_gamelogs', 'json', {player: 'stephen-curry'});
    
    
    
    return (
      <h3>Data</h3>
      <div class="row">{Data}</div>
    );
  }
}
