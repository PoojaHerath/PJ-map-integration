import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
  return (
    <div className="App">
      <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={"pk.eyJ1IjoibWFkaHVzaGFuaSIsImEiOiJja3F1M3oyNTcwMHdjMm9vNnd1MWsybnBjIn0.IwduwcTrJdq76oUyA6y6Zw"}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    />
    </div>
  );
}

export default App;
