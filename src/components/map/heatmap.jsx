import React, { Component, Fragment } from 'react';
import sqlQuery from '../../data/plotpoints.js';
import GoogleMap from './gmap.jsx';
import Gradients from '../../data/gradients.js';
import KEY from '../../data/key.js';

class Heatmap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: { lat: 41.2565, lng: -95.9345 },
      zoom: 4,
      gradient: []
    };
  }

  render() {
    const heatmapData = {
      positions: sqlQuery.positions,
      options: {
        radius: 10,
        opacity: 1,
      },
    };

    return (
      <Fragment>
        {(
          <GoogleMap
            defaultZoom={this.state.zoom}
            defaultCenter={this.state.center}
            heatmap={heatmapData}
            bootstrapURLKeys={{
              key: KEY,
              libraries: ['visualization'],
            }}
          />
        )}
      </Fragment>
    );
  }
}

export default Heatmap;