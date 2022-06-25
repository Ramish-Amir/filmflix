import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import styles from './MovieDetail.module.css'
import requests from '../utils/requests'
import { MdArrowBack, MdStar, MdCalendarToday, MdTimer, MdLanguage } from 'react-icons/md'


function MovieDetail() {

  const [movie, setMovie] = useState({})
  const params = useParams()
  const navigate = useNavigate()
  const baseURL = 'https://image.tmdb.org/t/p/original/'


  useEffect(() => {
    fetchMovieDetails()
    // console.log((Date.parse('2022-01-02').toString()).getUTCFullYear())
  }, [])

  const fetchMovieDetails = async () => {
    const sourceURL = await `${params.type}/${params.id}${requests.fetchDetails}`
    const resp = await axios.get(sourceURL)
    setMovie(resp?.data)
    // console.log(resp?.data)
  }

  const renderGenreTabs = (genres) => {
    return genres?.map((genre) =>
      <span key={genre?.id} className={styles.genre}>{genre?.name}</span>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div onClick={() => navigate('/')} className={styles.back}>
          <MdArrowBack className={styles.backIcon} />
        </div>
        <div className={styles.navTitle}>{movie?.title ?? movie?.name}</div>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <div className={styles.title}>
            {movie?.title}
            <br />
            ({(movie?.release_date)?.substring(0, 4)})
          </div>
          <div className={styles.tagline}>{movie?.tagline}</div>

          <div className={styles.metaData}>
            <div className={styles.metaItem}>
              <MdStar className={styles.metaIcon} />
              <span>{Math.round(movie?.vote_average * 10) / 10}</span>
            </div>
            <div className={styles.metaItem}>
              <MdTimer className={styles.metaIcon} />
              <span>{movie?.runtime} min</span>
            </div>
            <div className={styles.metaItem}>
              <MdCalendarToday className={styles.metaIcon} />
              <span>{movie?.release_date}</span>
            </div>
            <div className={styles.metaItem}>
              <MdLanguage className={styles.metaIcon} />
              <span>{movie?.original_language}</span>
            </div>
          </div>

          <div className={styles.genresWrap}>
            {renderGenreTabs(movie?.genres)}
          </div>

          <div className={styles.overview}>
            Overview:
            <p>{movie?.overview}</p>
          </div>


        </div>
        <div className={styles.posterContainer}>
          <img className={styles.poster} src={`${baseURL}${movie?.poster_path}`} alt={movie?.name ?? movie?.title} />
        </div>
      </div>
      <div className={styles.similarContainer}>Similar movies</div>
    </div>
  )
}

export default MovieDetail