import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import styles from './MovieCard.module.css'

function MovieCard({ movie }) {
  const baseURL = 'https://image.tmdb.org/t/p/original/'
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const openMovieDetails = (id, mediaType) => {
    navigate(`/${mediaType ?? 'movie'}/${id}`)
  }


  return (
    <div className={styles.card}
      onClick={() => openMovieDetails(movie?.id, movie?.media_type)}
      style={{
        backgroundImage: `url(${baseURL}${movie?.poster_path})`,
        backgroundSize: 'cover'
      }}>
      <div className={styles.overlay} />
      <div className={styles.rating}>{Math.round(movie?.vote_average * 10) / 10}</div>
      <div className={styles.releaseYear}>{movie?.year}</div>
      <div className={styles.movieContent}>
        <div className={styles.type}>{movie?.media_type}</div>
        <span className={styles.title}>{movie?.title ?? movie.name}</span>
      </div>
    </div>
  )
}

export default MovieCard