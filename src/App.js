import './App.css';
import MainPanel from './components/MainPanel';
import SidePanel from './components/SidePanel';

function App() {

  // Hex: #61dbfb; RGB: (97, 219, 251)
  // Grey hex: #282c34


  return (
    <div className="App">
      <SidePanel />
      <MainPanel />
    </div>
  );
}

export default App;
