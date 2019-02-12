import React from 'react';
import CraftyRankingsImage from "./CraftyRankingsImage";
const ReactRedux = require('react-redux');

const animalListing_mapStateToProps = (state, ownProps) => { return {
  animal: state.animals.animalStore[ownProps.id],
}};

class AnimalListing_View extends React.Component {
render () {
  var waitBeforeShow = 1000;
  if (this.props.rank > 25) {
    //TODO: If it's not above the fold, okay to delay load a bit. Hacky though.
    waitBeforeShow = 3000;
  }

  return (
    <div className="animalListing">
      <div className="imageBlock">
        <CraftyRankingsImage animal={this.props.animal} waitBeforeShow={waitBeforeShow}/>
      </div>
      <div className="descriptionBlock">
        <span className="description">
          <span className="rank">#{this.props.rank}</span>  <span className="name">{this.props.animal.Name}</span>
        </span>
      </div>
    </div>
)
  }
}

const AnimalListing = ReactRedux.connect(
animalListing_mapStateToProps)(AnimalListing_View);

export default AnimalListing;
