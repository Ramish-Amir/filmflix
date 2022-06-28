import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPanel from './components/MainPanel';
import MovieDetail from './components/MovieDetail';
import SidePanel from './components/SidePanel';
import { useDispatch } from 'react-redux'
import { useEffect } from 'react';
import requests from './utils/requests';
import { setMovies } from './redux/actions/movieActions';
import { fetchMoviesData } from './services/fetchService';

function App() {

  // Hex: #61dbfb; rgba(97, 219, 251,1)
  // Grey hex: #282c34, rgba(40,44,52,1)

  const dispatch = useDispatch()
 
  useEffect(() => {
    const fetchMovies = async () => {
      dispatch(setMovies([]))
      const resp = await fetchMoviesData(requests.fetchTrending)
      if (resp.status === 200 && (resp.data?.results)?.length > 0) {
        dispatch(setMovies(resp?.data?.results))
      } else {
        dispatch(setMovies('No movies found jka'))
      }
    }
    fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className="App">
      <Router>
        <SidePanel />
        <Routes>
          <Route exact path='/' element={<MainPanel />} />
          <Route path='/:type/:id' element={<MovieDetail />} />
        </Routes>
      </Router>

      {/* <MainPanel /> */}
    </div>
  );
}

export default App;
