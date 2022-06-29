import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPanel from './components/MainPanel';
import MovieDetail from './components/MovieDetail';
import SidePanel from './components/SidePanel';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import requests from './utils/requests';
import { setError, setMovies, setOpenSidebar } from './redux/actions/movieActions';
import { MdClose, MdMenu } from 'react-icons/md';
import logo from './assets/logo.jpeg'
import axios from './utils/axios';


function App() {

  // Hex: #61dbfb; rgba(97, 219, 251,1)
  // Grey hex: #282c34, rgba(40,44,52,1)

  const dispatch = useDispatch()
  const isOpenSidebar = useSelector(state => state.isOpenSidebar)
  const [smallView, setSmallView] = useState()

  useEffect(() => {
    handleResize()
    const fetchMovies = async () => {
      dispatch(setMovies([]))
      try {
        const resp = await axios.get(requests.fetchTrending)
        if (resp.status === 200 && (resp.data?.results)?.length > 0) {
          dispatch(setMovies(resp?.data?.results))
        } else {
          dispatch(setMovies('No movies found'))
        }
      } catch (error) {
        dispatch(setError(true))
      }
    }
    fetchMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSidebar = () => {
    dispatch(setOpenSidebar(!isOpenSidebar))
  }

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setSmallView(true)
    } else {
      setSmallView(false)
    }
  }

  window.addEventListener('resize', handleResize)


  return (
    <div className="App">
      <Router>
        <SidePanel />
        {smallView && <div className={'navBar'}>
          {isOpenSidebar ? <MdClose onClick={handleSidebar} className={'menuIcon'} alt='Close menu' />
            :
            <MdMenu onClick={handleSidebar} className={'menuIcon'} alt='Open menu' />}
          <img className={'panelLogo'} src={logo} alt='logo' />
        </div>}
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
