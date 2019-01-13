import React from 'react';
import AnimalContender from "./AnimalContender"
import RulesButton from "./RulesButton"
import {QueueState} from "./actionsAndReducers";
const ReactRedux = require('react-redux');

const ballot_mapStateToProps= (state, ownProps) => { return {
ballot: state.ballots.ballotStore[ownProps.id],
}};


class Ballot_View extends React.Component {
render () {

  if (this.props.ballot == null) {
    return null;
  }

  var leftVotedFor = "";
  var rightVotedFor = "";
  if (this.props.ballot.WinnerSide === "LEFT") {
    leftVotedFor = true;
  } else if (this.props.ballot.WinnerSide === "RIGHT") {
    rightVotedFor = true;
  }

  return (
    <div className={"ballot " +  this.props.ballot.QueueState + "Ballot" }>
      <div className={"animalBlock " + this.props.ballot.QueueState + "AnimalBlock"}>
        <AnimalContender id={this.props.ballot.Animal1ID} ballotID={this.props.id} animationState={this.props.ballot.QueueState + "left"} side={SIDE.LEFT} votedFor={leftVotedFor}/>
        <AnimalContender id={this.props.ballot.Animal2ID} ballotID={this.props.id} animationState={this.props.ballot.QueueState + "right"} side={SIDE.RIGHT} votedFor={rightVotedFor}/>
        <img alt="versus" src="./Burst_Transparent.png" className={"ballotBackground " + this.props.ballot.QueueState}/>
      </div>
      <div className={"theQuestionBlock " + this.props.ballot.QueueState}>
        <span className="theQuestion">Who Would Win?</span><RulesButton/>
      </div>
    </div>
  );
}
}
const Ballot = ReactRedux.connect(
ballot_mapStateToProps
)(Ballot_View);

const SIDE = {
LEFT: "LEFT",
RIGHT : "RIGHT"
}

export default Ballot;
