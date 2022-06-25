import React, { useState } from 'react'
import styles from './SidePanel.module.css'
import logo from '../assets/logo.jpeg'
import { useDispatch } from 'react-redux'
import { setMovies } from '../redux/actions/movieActions'
import categories from '../utils/categories'
import genres from '../utils/genres'
import { fetchMoviesData } from '../services/fetchService'
import { useNavigate } from 'react-router'

function SidePanel() {
    const [selectedTab, setSelectedTab] = useState('Trending')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const changeMovies = async (newTab, newUrl) => {
        navigate('/')
        dispatch(setMovies([]))
        setSelectedTab(newTab)
        const resp = await fetchMoviesData(newUrl)
        if (resp.status === 200 && (resp.data?.results)?.length > 0) {
            dispatch(setMovies(resp?.data?.results))
          } else {
            dispatch(setMovies('No movies found'))
          }
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
            <img onClick={() => navigate('/')} className={styles.panelLogo} src={logo} />

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