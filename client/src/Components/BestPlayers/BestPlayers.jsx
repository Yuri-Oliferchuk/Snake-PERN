import React from "react";
import './BestPlayers.css';

const BestPlayers = (props) => {
    let counter = 0;
  return (
    <div className="scoreTable">
      {props.bestPlayers.map((body, i) => {
          counter ++;
        return (
          <div className='bestPlayer' key={body.id} >
            <div className="playerPosition" >{counter}</div>
            <div className="playerName" >{body.username}</div>
            <div className="playerScore" >{body.high_score}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BestPlayers;
