import React from 'react';

import NearbyStations from './containers/nearby_stations';
import './App.css';

const App = (props) => {
  return(
    <div>
      <div className="container">
        <div className="columns">
          <div className="column col-3" />
          <div className="column col-6">
            <NearbyStations />
          </div>
          <div className="column col-3" />
        </div>
      </div>
    </div>
  )
}

export default App
