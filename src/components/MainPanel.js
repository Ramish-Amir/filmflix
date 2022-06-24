import React, { useEffect, useState } from 'react'
import styles from './MainPanel.module.css'
import { MdSearch } from 'react-icons/md'
import MovieCard from './MovieCard'
import { useSelector } from 'react-redux'

function MainPanel() {
    const movies = useSelector((state) => state.moviesList.movies)
    const [input, setInput] = useState('')

    return (
        <div className={styles.mainPanel}>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search movies" value={input} onChange={(e) => { setInput(e.target.value) }} />
                <MdSearch className={styles.searchIcon} />
            </div>

            <div className={styles.cardsContainer}>
                {
                    movies?.length > 0 ? movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />) : <h1>No movies found</h1>
                }
            </div>
        </div>
    )
}

export default MainPanel