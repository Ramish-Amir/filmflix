import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPanel from './components/MainPanel';
import MovieDetail from './components/MovieDetail';
import SidePanel from './components/SidePanel';
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import axios from './utils/axios'
import requests from './utils/requests';
import { setMovies } from './redux/actions/movieActions';

function App() {

  // Hex: #61dbfb; RGB: (97, 219, 251)
  // Grey hex: #282c34

  const dispatch = useDispatch()

  useEffect(() => {
    fetchMovies()
  },[])

  const fetchMovies = async() => {
    const resp = await axios.get(requests.fetchTrending)
    dispatch(setMovies(resp?.data?.results))
  }


  return (
    <div className="App">
      <Router>
        <SidePanel />
        <Routes>
          <Route exact path='/' element={<MainPanel />} />
          <Route exact path='/movie/:id' element={<MovieDetail />} />
        </Routes>
      </Router>

      {/* <MainPanel /> */}
    </div>
  );
}

export default App;
