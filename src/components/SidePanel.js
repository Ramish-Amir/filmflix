import React, { useState } from 'react'
import styles from './SidePanel.module.css'
import logo from '../assets/logo.jpeg'
import { MdTheaters, MdStar, MdGroups, MdTrendingUp, MdExplore, MdPets, MdTheaterComedy, MdRunCircle, MdVideoCameraBack, MdSentimentDissatisfied, MdFamilyRestroom, MdAutoFixHigh, MdHistoryToggleOff, MdSkateboarding, MdMusicNote, MdLiveHelp, MdFavorite, MdSatellite, MdDesktopWindows, MdExtension, MdAnchor, MdPark } from 'react-icons/md'

function SidePanel() {
    const [selectedTab, setSelectedTab] = useState('Popular')
    const categories = ['Popular', 'Trending', 'Top Rated', 'Up Coming']
    const catIcons = [
        <MdTheaters className={styles.panelIcon} />,
        <MdTrendingUp className={styles.panelIcon} />,
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
                    return <div className={`${styles.panelItem} ${selectedTab === item && styles.activeTab}`} onClick={(e) => { setSelectedTab(item) }}>
                        {catIcons[index]}
                        <span className={styles.itemName}>{item}</span>
                    </div>
                })}

                <div className={styles.panelHeader}>Genres</div>

                {
                    genres.map((item, index) => {
                        return <div className={`${styles.panelItem} ${selectedTab === item && styles.activeTab}`} onClick={(e) => { setSelectedTab(item) }}>
                            {genreIcons[index]}
                            <span className={styles.itemName}>{item}</span>
                        </div>
                    })
                }

                {/* <div className={`${styles.panelItem} ${selectedTab === 'popular' && styles.activeTab}`} onClick={(e) => { setSelectedTab('popular') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Popular</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'trending' && styles.activeTab}`} onClick={() => { setSelectedTab('trending') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Trending</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'topRated' && styles.activeTab}`} onClick={(e) => { setSelectedTab('topRated') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Top Rated</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'upComing' && styles.activeTab}`} onClick={(e) => { setSelectedTab('upComing') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Up Coming</span>
                </div>

                <div className={styles.panelHeader}>Genres</div>
                <div className={`${styles.panelItem} ${selectedTab === 'action' && styles.activeTab}`} onClick={(e) => { setSelectedTab('action') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Action</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'adventure' && styles.activeTab}`} onClick={() => { setSelectedTab('adventure') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Adventure</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'animation' && styles.activeTab}`} onClick={(e) => { setSelectedTab('animation') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Animation</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'comedy' && styles.activeTab}`} onClick={(e) => { setSelectedTab('comedy') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Comedy</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'crime' && styles.activeTab}`} onClick={(e) => { setSelectedTab('crime') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Crome</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'trending' && styles.activeTab}`} onClick={() => { setSelectedTab('trending') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Trending</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'topRated' && styles.activeTab}`} onClick={(e) => { setSelectedTab('topRated') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Top Rated</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'upComing' && styles.activeTab}`} onClick={(e) => { setSelectedTab('upComing') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Up Coming</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'popular' && styles.activeTab}`} onClick={(e) => { setSelectedTab('popular') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Popular</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'trending' && styles.activeTab}`} onClick={() => { setSelectedTab('trending') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Trending</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'topRated' && styles.activeTab}`} onClick={(e) => { setSelectedTab('topRated') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Top Rated</span>
                </div>
                <div className={`${styles.panelItem} ${selectedTab === 'upComing' && styles.activeTab}`} onClick={(e) => { setSelectedTab('upComing') }}>
                    <MdLocalActivity className={styles.panelIcon} />
                    <span className={styles.itemName}>Up Coming</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Action</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Adventure</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Animation</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Comedy</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Crime</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Documentary</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Drama</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Family</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Fantasy</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>History</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Horror</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Music</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Mystery</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Romance</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Science Fiction</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>TV Movies</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Thriller</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>War</span>
                </div>
                <div className={styles.panelItem}>
                    <MdLocalActivity className={styles.panelIcon}></MdLocalActivity>
                    <span className={styles.itemName}>Western</span>
                </div> */}
            </div>
        </div>
    )
}

export default SidePanel