import React from 'react'
import styles from './SidePanel.module.css'
import logo from '../assets/filmflix.png'

function SidePanel() {
    return (
        <div className={styles.sidePanelContainer}>
            <img className={styles.panelLogo} src={logo} />
        </div>
    )
}

export default SidePanel