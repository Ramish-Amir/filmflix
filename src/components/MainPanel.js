import React, { useEffect, useState } from 'react'
import styles from './MainPanel.module.css'
import { MdSearch } from 'react-icons/md'
import MovieCard from './MovieCard'
import { useDispatch, useSelector } from 'react-redux'
import spinner2 from '../assets/220.svg'
import axios from '../utils/axios'
import requests from '../utils/requests'
import { setMovies } from '../redux/actions/movieActions'


function MainPanel() {
    const movies = useSelector((state) => state.moviesList.movies)
    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    useEffect(() => {
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

    return (
        <div className={styles.mainPanel}>

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