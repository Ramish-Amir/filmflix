import React, { useState } from 'react'
import styles from './SidePanel.module.css'
import logo from '../assets/logo.jpeg'
import { MdTheaters, MdStar, MdGroups, MdTrendingUp, MdExplore, MdPets, MdTheaterComedy, MdRunCircle, MdVideoCameraBack, MdSentimentDissatisfied, MdFamilyRestroom, MdAutoFixHigh, MdHistoryToggleOff, MdSkateboarding, MdMusicNote, MdLiveHelp, MdFavorite, MdSatellite, MdDesktopWindows, MdExtension, MdAnchor, MdPark } from 'react-icons/md'

function SidePanel() {
    const [selectedTab, setSelectedTab] = useState('Trending')
    const categories = ['Trending', 'Popular', 'Top Rated', 'Up Coming']
    const catIcons = [
        <MdTrendingUp className={styles.panelIcon} />,
        <MdTheaters className={styles.panelIcon} />,
        <MdStar className={styles.panelIcon} />,
        <MdGroups className={styles.panelIcon} />,
    ]
    const genres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery', 'Romance', 'Science Fiction', 'TV Movies', 'Thriller', 'War', 'Western']
    const genreIcons = [
        <MdSkateboarding className={styles.panelIcon} />,
        <MdExplore className={styles.panelIcon} />,
        <MdPets className={styles.panelIcon} />,
        <MdTheaterComedy className={styles.panelIcon} />,
        <MdRunCircle className={styles.panelIcon} />,
        <MdVideoCameraBack className={styles.panelIcon} />,
        <MdSentimentDissatisfied className={styles.panelIcon} />,
        <MdFamilyRestroom className={styles.panelIcon} />,
        <MdAutoFixHigh className={styles.panelIcon} />,
        <MdHistoryToggleOff className={styles.panelIcon} />,
        <MdTheaterComedy className={styles.panelIcon} />,
        <MdMusicNote className={styles.panelIcon} />,
        <MdLiveHelp className={styles.panelIcon} />,
        <MdFavorite className={styles.panelIcon} />,
        <MdSatellite className={styles.panelIcon} />,
        <MdDesktopWindows className={styles.panelIcon} />,
        <MdExtension className={styles.panelIcon} />,
        <MdAnchor className={styles.panelIcon} />,
        <MdPark className={styles.panelIcon} />,
    ]

    return (
        <div className={styles.sidePanelContainer}>
            <img className={styles.panelLogo} src={logo} />

            <div className={styles.panelContent}>
                <div className={styles.panelHeader}>Categories</div>

                {categories.map((item, index) => {
                    return <div key={index} className={`${styles.panelItem} ${selectedTab === item && styles.activeTab}`} onClick={(e) => { setSelectedTab(item) }}>
                        {catIcons[index]}
                        <span className={styles.itemName}>{item}</span>
                    </div>
                })}

                <div className={styles.panelHeader}>Genres</div>

                {
                    genres.map((item, index) => {
                        return <div key={index} className={`${styles.panelItem} ${selectedTab === item && styles.activeTab}`} onClick={(e) => { setSelectedTab(item) }}>
                            {genreIcons[index]}
                            <span className={styles.itemName}>{item}</span>
                        </div>
                    })
                }

            </div>
        </div>
    )
}

export default SidePanel