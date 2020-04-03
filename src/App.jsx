import React from 'react';
import './App.css';
import Heatmap from './components/map/heatmap.jsx';
import SidePanel from './components/sidepanel/sidePanel.jsx';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <div className="map-container">
          <Heatmap />
        </div>
        <SidePanel />
      </div>
    );
  }
}

export default App;
