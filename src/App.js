import logo from './logo.svg';
import './App.css';
import MyMapComponent from './map';

function App() {
  return (
    <div className="App">
      <MyMapComponent 
   googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
   loadingElement={<div style={{ height: `100%` }} />}
   containerElement={<div style={{ height: `400px` }} />}
   mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

export default App;
