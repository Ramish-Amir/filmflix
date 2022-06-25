import requests from "./requests";
import { MdExplore, MdPets, MdTheaterComedy, MdRunCircle, MdVideoCameraBack, MdSentimentDissatisfied, MdFamilyRestroom, MdAutoFixHigh, MdHistoryToggleOff, MdSkateboarding, MdMusicNote, MdLiveHelp, MdFavorite, MdSatellite, MdDesktopWindows, MdExtension, MdAnchor, MdPark } from 'react-icons/md'

const genres = [
    {
        name: 'Action',
        icon: <MdSkateboarding className='panelIcon' />,
        sourceURL: requests.fetchActionMovies
    },
    {
        name: 'Adventure',
        icon: <MdExplore className='panelIcon' />,
        sourceURL: requests.fetchAdventureMovies
    },
    {
        name: 'Animation',
        icon: <MdPets className='panelIcon' />,
        sourceURL: requests.fetchAnimationMovies
    },
    {
        name: 'Comedy',
        icon: <MdTheaterComedy className='panelIcon' />,
        sourceURL: requests.fetchComedyMovies
    },
    {
        name: 'Crime',
        icon: <MdRunCircle className='panelIcon' />,
        sourceURL: requests.fetchCrimeMovies
    },
    {
        name: 'Documentary',
        icon: <MdVideoCameraBack className='panelIcon' />,
        sourceURL: requests.fetchDocumentries
    },
    {
        name: 'Drama',
        icon: <MdSentimentDissatisfied className='panelIcon' />,
        sourceURL: requests.fetchDramaMovies
    },
    {
        name: 'Family',
        icon: <MdFamilyRestroom className='panelIcon' />,
        sourceURL: requests.fetchFamilyMovies
    },
    {
        name: 'Fantasy',
        icon: <MdAutoFixHigh className='panelIcon' />,
        sourceURL: requests.fetchFantasyMovies
    },
    {
        name: 'History',
        icon: <MdHistoryToggleOff className='panelIcon' />,
        sourceURL: requests.fetchHistoryMovies
    },
    {
        name: 'Horror',
        icon: <MdTheaterComedy className='panelIcon' />,
        sourceURL: requests.fetchHorrorMovies
    },
    {
        name: 'Music',
        icon: <MdMusicNote className='panelIcon' />,
        sourceURL: requests.fetchMusicyMovies
    },
    {
        name: 'Mystery',
        icon: <MdLiveHelp className='panelIcon' />,
        sourceURL: requests.fetchMysteryMovies
    },
    {
        name: 'Romance',
        icon: <MdFavorite className='panelIcon' />,
        sourceURL: requests.fetchRomanceMovies
    },
    {
        name: 'Science Fiction',
        icon: <MdSatellite className='panelIcon' />,
        sourceURL: requests.fetchScienceFictionMovies
    },
    {
        name: 'TV Movie',
        icon: <MdDesktopWindows className='panelIcon' />,
        sourceURL: requests.fetchTVMovieMovies
    },
    {
        name: 'Thriller',
        icon: <MdExtension className='panelIcon' />,
        sourceURL: requests.fetchThrillerMovies
    },
    {
        name: 'War',
        icon: <MdAnchor className='panelIcon' />,
        sourceURL: requests.fetchWarMovies
    },
    {
        name: 'Western',
        icon: <MdPark className='panelIcon' />,
        sourceURL: requests.fetchWesternMovies
    }

]

export default genres