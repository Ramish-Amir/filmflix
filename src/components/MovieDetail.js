import axios from '../utils/axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import styles from './MovieDetail.module.css'
import requests from '../utils/requests'
import { MdArrowBack, MdStar, MdCalendarToday, MdTimer, MdLanguage, MdLiveTv } from 'react-icons/md'
import spinner2 from '../assets/220.svg'
import MovieCard from './MovieCard'


function MovieDetail() {
  const [movie, setMovie] = useState({})
  const [similarMovies, setSimilarMovies] = useState([])
  const [loadingDetails, setLoadingDetails] = useState(true)
  const [loadingSimilar, setLoadingSimilar] = useState(true)
  const params = useParams()
  const navigate = useNavigate()
  const baseURL = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoadingDetails(true)
      const sourceURL = await `${params.type}/${params.id}${requests.fetchDetails}`
      const resp = await axios.get(sourceURL)
      setMovie(resp?.data)
      setLoadingDetails(false)
    }
  
    const fetchSimilar = async () => {
      setLoadingSimilar(true)
      const similarURL = await `${params.type}/${params.id}${requests.fetchSimilar}`
      const resp = await axios.get(similarURL)
      setSimilarMovies(resp?.data?.results)
      setLoadingSimilar(false)
    }
    fetchMovieDetails()
    fetchSimilar()
  }, [params])

  

  const renderGenreTabs = (genres) => {
    return genres?.map((genre) =>
      <span key={genre?.id} className={styles.genre}>{genre?.name}</span>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div onClick={() => navigate(-1)} className={styles.back}>
          <MdArrowBack className={styles.backIcon} />
        </div>
        {!loadingDetails && <div className={styles.navTitle}>{movie?.title ?? movie?.name}</div>}
      </div>
      
      {loadingDetails
        ? <div className='preloadContainer'>
          <img src={spinner2} className='preloader' alt='Loading data' />
        </div>
        : <div className={styles.contentWrap}>
          <div className={styles.content}>
            <div className={styles.title}>
              {movie?.title ?? movie?.name}
              <br />
              ({(movie?.release_date ?? movie?.first_air_date)?.substring(0, 4)})
            </div>
            <div className={styles.tagline}>{movie?.tagline}</div>

            <div className={styles.metaData}>
              <div className={styles.metaItem}>
                <MdStar className={styles.metaIcon} />
                <span>{Math.round(movie?.vote_average * 10) / 10}</span>
              </div>
              {movie?.runtime &&
                <div className={styles.metaItem}>
                  <MdTimer className={styles.metaIcon} />
                  <span>{movie?.runtime} min</span>
                </div>}
              {movie?.number_of_seasons && <div className={styles.metaItem}>
                <MdLiveTv className={styles.metaIcon} />
                <span>{movie?.number_of_seasons} {(movie?.number_of_seasons > 1) ? `Seasons` : `Season`}</span>
              </div>}
              <div className={styles.metaItem}>
                <MdCalendarToday className={styles.metaIcon} />
                <span>{movie?.release_date ?? movie?.first_air_date}</span>
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
        </div>}


      <div className={styles.similarContainer}>
        <h2>You might also like</h2>
        {
          loadingSimilar
            ?
            <div className='preloadContainer'>
              <img src={spinner2} className='preloader' alt='Loading data' />
            </div>
            :
            <div className={styles.similarMovies}>
              {similarMovies.map((movie) =>
                <MovieCard key={movie.id} movie={movie} />)}
            </div>
        }
      </div>
    </div>
  )
}

export default MovieDetail