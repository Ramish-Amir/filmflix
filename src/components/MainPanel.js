import React, { useEffect, useState } from 'react'
import styles from './MainPanel.module.css'
import { MdClose, MdMenu, MdSearch } from 'react-icons/md'
import MovieCard from './MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import spinner2 from '../assets/220.svg'
import axios from '../utils/axios'
import requests from '../utils/requests'
import { setMovies, setOpenSidebar } from '../redux/actions/movieActions'
import logo from '../assets/logo.jpeg'
import { useNavigate } from 'react-router'


function MainPanel() {
    const movies = useSelector((state) => state.moviesList.movies)
    const isOpenSidebar = useSelector(state => state.isOpenSidebar)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input, setInput] = useState('')
    const [smallView, setSmallView] = useState()

    useEffect(() => {
        handleResize()
    }, [movies])

    const onSearch = (e) => {
        if (e.key === 'Enter') {
            dispatch(setMovies([]))
            const keywords = input.split(' ').join('%20')
            searchMovies(keywords)
        }
    }

    const searchMovies = async (keywords) => {
        const resp = await axios.get(`${requests.searchMovie}${keywords}`)
        dispatch(setMovies(resp?.data?.results))
    }

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
        <div className={styles.mainPanel}>

            {smallView && <div className={styles.navBar}>
                {isOpenSidebar ? <MdClose onClick={handleSidebar} className={styles.menuIcon} alt='Close menu' />
                :
                <MdMenu onClick={handleSidebar} className={styles.menuIcon} alt='Open menu' />}
                <img onClick={() => navigate('/')} className={styles.panelLogo} src={logo} alt='logo' />
            </div>}

            <div className={styles.searchBar}>
                <input type="text" placeholder="Search movies" value={input}
                    onChange={(e) => { setInput(e.target.value) }}
                    onKeyDown={(e) => onSearch(e)} />
                <MdSearch className={styles.searchIcon} />
            </div>

            <div className={styles.cardsContainer}>
                {
                    movies === 'No movies found' ? <h1 className='noMovies'>No movies found</h1> :
                        (movies?.length > 0 ? movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                            : <img src={spinner2} alt='Loading data' />)
                }
            </div>
        </div>
    )
}

export default MainPanel