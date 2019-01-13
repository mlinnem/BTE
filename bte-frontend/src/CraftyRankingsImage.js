import React from 'react';
const ReactRedux = require('react-redux');

class CraftyRankingsImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hidden : true};
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, this.props.waitBeforeShow);
    }

    render() {
        if (this.state.hidden) {
          return (<img className="photo" alt={this.props.animal.Name}/>);
        } else {
          return (  <img alt={this.props.animal.Name} src={"https://n6d28h0794.execute-api.us-east-1.amazonaws.com/Production/photos?animalName=" + encodeURIComponent(this.props.animal.Name) + "&size=Width_100"}/>
          );
        }
}

// CraftyContenderImage.propTypes = {
//   waitBeforeShow: PropTypes.number.isRequired
// };
}

export default CraftyRankingsImage;
