import './App.css';
import MainPanel from './components/MainPanel';
import SidePanel from './components/SidePanel';

function App() {


    // api key: 57004a39
  // url: https://omdbapi.com?apikey=57004a39
  // https://via.placeholder.com/400

  // Hex: #61dbfb; RGB: (97, 219, 251)
  // Blue hex: #282c34


  return (
    <div className="App">
      <SidePanel />
      <MainPanel />
      {/* <MovieCard /> */}
    </div>
  );
}

export default App;
