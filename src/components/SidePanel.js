import React, { useState } from 'react'
import styles from './SidePanel.module.css'
import logo from '../assets/logo.jpeg'
import axios from '../utils/axios'
import { useDispatch } from 'react-redux'
import { setMovies } from '../redux/actions/movieActions'
import categories from '../utils/categories'
import genres from '../utils/genres'

function SidePanel() {
    const [selectedTab, setSelectedTab] = useState('Trending')
    const dispatch = useDispatch()

    

    const changeMovies = async (newTab, newUrl) => {
        dispatch(setMovies([]))
        setSelectedTab(newTab)
        const newResp = await axios.get(newUrl)
        dispatch(setMovies(newResp.data.results))
    }

    const renderSideTabs = (items) => {
        return items.map((item, index) => (
            <div key={index}
                        className={`${styles.panelItem} ${selectedTab === item.name && styles.activeTab}`}
                        onClick={() => { changeMovies(item.name, item.sourceURL) }}>
                        {item.icon}
                        <span className={styles.itemName}>{item.name}</span>
                    </div>
        ))
    }

    return (
        <div className={styles.sidePanelContainer}>
            <img className={styles.panelLogo} src={logo} />

            <div className={styles.panelContent}>
                <div className={styles.panelHeader}>Categories</div>

                {
                    renderSideTabs(categories)
                }

                <div className={styles.panelHeader}>Genres</div>

                {
                    renderSideTabs(genres)
                }

            </div>
        </div>
    )
}

export default SidePanel