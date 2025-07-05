import React from 'react'
import styles from '../styles/navbar.module.css'

function NavBar() {
    return (
        <div className={styles.navbar}>
            <p className={styles.companyName}>
                ARTM
            </p>
        </div>
    )
}

export default NavBar