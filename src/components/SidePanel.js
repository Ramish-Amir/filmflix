import React, { useState } from 'react'
import styles from './SidePanel.module.css'
import logo from '../assets/logo.jpeg'
import { MdTheaters, MdStar, MdGroups, MdTrendingUp, MdExplore, MdPets, MdTheaterComedy, MdRunCircle, MdVideoCameraBack, MdSentimentDissatisfied, MdFamilyRestroom, MdAutoFixHigh, MdHistoryToggleOff, MdSkateboarding, MdMusicNote, MdLiveHelp, MdFavorite, MdSatellite, MdDesktopWindows, MdExtension, MdAnchor, MdPark, MdNote } from 'react-icons/md'
import requests from '../utils/requests'
import axios from '../utils/axios'
import { useDispatch } from 'react-redux'
import { setMovies } from '../redux/actions/movieActions'

function SidePanel() {
    const [selectedTab, setSelectedTab] = useState('Trending')
    const dispatch = useDispatch()

    const categories = [
        {
            name: 'Trending',
            icon: <MdTrendingUp className={styles.panelIcon} />,
            sourceURL: requests.fetchTrending
        },
        {
            name: 'Popular',
            icon: <MdTheaters className={styles.panelIcon} />,
            sourceURL: requests.fetchPopular
        },
        {
            name: 'Top Rated',
            icon: <MdStar className={styles.panelIcon} />,
            sourceURL: requests.fetchTopRated
        },
        {
            name: 'Up Coming',
            icon: <MdGroups className={styles.panelIcon} />,
            sourceURL: requests.fetchUpcoming
        }
    ]

    const genres = [
        {
            name: 'Action',
            icon: <MdSkateboarding className={styles.panelIcon} />,
            sourceURL: requests.fetchActionMovies
        },
        {
            name: 'Adventure',
            icon: <MdExplore className={styles.panelIcon} />,
            sourceURL: requests.fetchAdventureMovies
        },
        {
            name: 'Animation',
            icon: <MdPets className={styles.panelIcon} />,
            sourceURL: requests.fetchAnimationMovies
        },
        {
            name: 'Comedy',
            icon: <MdTheaterComedy className={styles.panelIcon} />,
            sourceURL: requests.fetchComedyMovies
        },
        {
            name: 'Crime',
            icon: <MdRunCircle className={styles.panelIcon} />,
            sourceURL: requests.fetchCrimeMovies
        },
        {
            name: 'Documentary',
            icon: <MdVideoCameraBack className={styles.panelIcon} />,
            sourceURL: requests.fetchDocumentries
        },
        {
            name: 'Drama',
            icon: <MdSentimentDissatisfied className={styles.panelIcon} />,
            sourceURL: requests.fetchDramaMovies
        },
        {
            name: 'Family',
            icon: <MdFamilyRestroom className={styles.panelIcon} />,
            sourceURL: requests.fetchFamilyMovies
        },
        {
            name: 'Fantasy',
            icon: <MdAutoFixHigh className={styles.panelIcon} />,
            sourceURL: requests.fetchFantasyMovies
        },
        {
            name: 'History',
            icon: <MdHistoryToggleOff className={styles.panelIcon} />,
            sourceURL: requests.fetchHistoryMovies
        },
        {
            name: 'Horror',
            icon: <MdTheaterComedy className={styles.panelIcon} />,
            sourceURL: requests.fetchHorrorMovies
        },
        {
            name: 'Music',
            icon: <MdMusicNote className={styles.panelIcon} />,
            sourceURL: requests.fetchMusicyMovies
        },
        {
            name: 'Mystery',
            icon: <MdLiveHelp className={styles.panelIcon} />,
            sourceURL: requests.fetchMysteryMovies
        },
        {
            name: 'Romance',
            icon: <MdFavorite className={styles.panelIcon} />,
            sourceURL: requests.fetchRomanceMovies
        },
        {
            name: 'Science Fiction',
            icon: <MdSatellite className={styles.panelIcon} />,
            sourceURL: requests.fetchScienceFictionMovies
        },
        {
            name: 'TV Movie',
            icon: <MdDesktopWindows className={styles.panelIcon} />,
            sourceURL: requests.fetchTVMovieMovies
        },
        {
            name: 'Thriller',
            icon: <MdExtension className={styles.panelIcon} />,
            sourceURL: requests.fetchThrillerMovies
        },
        {
            name: 'War',
            icon: <MdAnchor className={styles.panelIcon} />,
            sourceURL: requests.fetchWarMovies
        },
        {
            name: 'Western',
            icon: <MdPark className={styles.panelIcon} />,
            sourceURL: requests.fetchWesternMovies
        }

    ]

    const changeMovies = async (newTab, newUrl) => {
        setSelectedTab(newTab)
        const newResp = await axios.get(newUrl)
        console.log(newResp)
        dispatch(setMovies(newResp.data.results))
    }

    return (
        <div className={styles.sidePanelContainer}>
            <img className={styles.panelLogo} src={logo} />

            <div className={styles.panelContent}>
                <div className={styles.panelHeader}>Categories</div>

                {categories.map((item, index) => {
                    return <div key={index}
                        className={`${styles.panelItem} ${selectedTab === item.name && styles.activeTab}`}
                        onClick={() => { changeMovies(item.name, item.sourceURL) }}>
                        {item.icon}
                        <span className={styles.itemName}>{item.name}</span>
                    </div>
                })}

                <div className={styles.panelHeader}>Genres</div>

                {
                    genres.map((item, index) => {
                        return <div key={index}
                            className={`${styles.panelItem} ${selectedTab === item.name && styles.activeTab}`}
                            onClick={() => { changeMovies(item.name, item.sourceURL) }}>
                            {item.icon}
                            <span className={styles.itemName}>{item.name}</span>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default SidePanel