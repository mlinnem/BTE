import React from 'react';
const ReactRedux = require('react-redux');

class CraftyContenderImage extends React.Component {

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
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        console.log("w: " + w + ", h:" + h);
        var imageSize = "";
        if (w < 415 && h < 900) {
          imageSize = "300";
        } else {
          imageSize = "500"; //TODO: Don't hardcode
        }

        if (this.state.hidden) {
          return (<img className="photo" alt={this.props.animal.Name}/>);
        } else {
          return (<img className="photo" alt={this.props.animal.Name} src={"https://n6d28h0794.execute-api.us-east-1.amazonaws.com/Production/photos?animalName=" + encodeURIComponent(this.props.animal.Name) + "&size=Width_" + imageSize}/>);
        }
}

// CraftyContenderImage.propTypes = {
//   waitBeforeShow: PropTypes.number.isRequired
// };
}

export default CraftyContenderImage;
