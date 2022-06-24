import React, { useEffect, useState } from 'react'
import styles from './MainPanel.module.css'
import { MdSearch } from 'react-icons/md'
import MovieCard from './MovieCard'
import axios from '../utils/axios'
import requests from '../utils/requests'

function MainPanel() {
    const baseUrl = 'https://api.themoviedb.org/3'
    const [movies, setMovies] = useState([])
    const [input, setInput] = useState('')

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
        const resp = await axios.get(requests.fetchTrending)
        setMovies(resp.data.results)
    }

    return (
        <div className={styles.mainPanel}>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search movies" value={input} onChange={(e) => { setInput(e.target.value) }} />
                <MdSearch className={styles.searchIcon} />
            </div>

            <div className={styles.cardsContainer}>
                {
                    movies.map((movie) => 
                        <MovieCard key={movie.id} movie={movie} />
                    )
                }
            </div>

        </div>
    )
}

export default MainPanel