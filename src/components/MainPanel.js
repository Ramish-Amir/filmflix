import React, { useState } from 'react'
import styles from './MainPanel.module.css'
import {MdSearch} from 'react-icons/md'

function MainPanel() {
    const [input, setInput] = useState('')

    return (
        <div className={styles.mainPanel}>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search movies" value={input} onChange = {(e) => {setInput(e.target.value)}} />
                <MdSearch className={styles.searchIcon} />    
            </div>

        </div>
    )
}

export default MainPanel