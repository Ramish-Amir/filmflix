import React, { useEffect, useState } from 'react'
import styles from './SidePanel.module.css'
import logo from '../assets/logo.jpeg'
import { useDispatch, useSelector } from 'react-redux'
import { setError, setMovies, setOpenSidebar } from '../redux/actions/movieActions'
import categories from '../utils/categories'
import genres from '../utils/genres'
import { useNavigate } from 'react-router'
import axios from '../utils/axios'

function SidePanel() {
    const [selectedTab, setSelectedTab] = useState('Trending')
    const [smallView, setSmallView] = useState()
    const isOpenSidebar = useSelector(state => state.isOpenSidebar)
    const errorOccured = useSelector(state => state.errorOccured)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        handleResize()
    }, [])

    const changeMovies = async (newTab, newUrl) => {
        dispatch(setOpenSidebar(false))
        navigate('/')
        dispatch(setMovies([]))
        setSelectedTab(newTab)
        try {
            const resp = await axios.get(newUrl)
            if (resp.status === 200 && (resp.data?.results)?.length > 0) {
                dispatch(setMovies(resp?.data?.results))
            } else {
                dispatch(setMovies('No movies found'))
            }
        } catch (error) {
            dispatch(setError(true))
            console.log(errorOccured)
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

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            setSmallView(true)
        } else {
            setSmallView(false)
        }
    }

    window.addEventListener('resize', handleResize)

    return (
        <div className={`${styles.sidePanelContainer} ${isOpenSidebar && styles.sidePanelContainerSmall} `}>
            {!smallView && <img onClick={() => navigate('/')} className={styles.panelLogo} src={logo} alt='logo' />}

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