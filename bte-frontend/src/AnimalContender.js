import React from 'react';
import {submitBallotAndAdvance} from "./actionsAndReducers";
import {QUEUE_STATE} from "./actionsAndReducers";
import CraftyContenderImage from "./CraftyContenderImage";
const ReactRedux = require('react-redux');

const DELAY_HIDDEN_IMAGE_LOAD_MILLISECONDS = 750;

const animalContender_mapStateToProps = (state, ownProps) => {return {
animal : state.animals.animalStore[ownProps.id],
ballot : state.ballots.ballotStore[ownProps.ballotID]
}};
const animalContender_mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onBallotClick: () => {
        dispatch(submitBallotAndAdvance(ownProps.side));
      }
    }
  };


class AnimalContender_View extends React.Component {
render () {
  var votedFor = "";
  if (this.props.votedFor) {
    votedFor = "votedFor";
  }

  var delay = 0;
  if (this.props.ballot.QueueState === QUEUE_STATE.HIDDEN) {
    delay = DELAY_HIDDEN_IMAGE_LOAD_MILLISECONDS;
  }

  if (!this.props.animal) {
    return "Failure to load animal with ID: " + this.props.id; //TODO: Have a general error display mechanism
  }

  return (
<span className={"outerCardWrapper " + this.props.side}>
  <span className={"cardWrapper " + this.props.side + " " + votedFor}>
    <div className={this.props.animationState + " animal " + votedFor} onClick={this.props.onBallotClick}>
      <div className={"cardAndHover" }>
      <div className="theCard">
      <CraftyContenderImage animal={this.props.animal} waitBeforeShow={delay}/>
      <div className ="animalNameBox">
          <span className="animalName">{this.props.animal.Name}</span>
        </div>
      </div>
      <div className={"cardHover " + votedFor}/>
      </div>
    </div>
  </span>
</span>
)
  }
}
const AnimalContender = ReactRedux.connect(
animalContender_mapStateToProps,
animalContender_mapDispatchToProps
)(AnimalContender_View);




export default AnimalContender;
