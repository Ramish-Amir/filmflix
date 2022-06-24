import React from 'react'
import styles from './MovieCard.module.css'

function MovieCard({ movie }) {
  const baseURL = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className={styles.card}
      style={{
        backgroundImage: `url(${baseURL}${movie?.poster_path})`,
        backgroundSize: 'cover'
      }}>
      <div className={styles.overlay} />
      <div className={styles.rating}>{movie?.vote_average}</div>
      <div className={styles.releaseYear}>{movie?.year}</div>
      <div className={styles.movieContent}>
        <div className={styles.type}>{movie?.media_type}</div>
        <span className={styles.title}>{movie?.title ?? movie.name}</span>
      </div>
    </div>
  )
}

export default MovieCard