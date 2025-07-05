import React from 'react'
import styles from '../styles/SideComponent.module.css'
import ArtCard from './ArtCard'

function SideComponent() {

    // fetch the api into this side component to display all the art pieces
    // repeat the art card
    return (
        <div className={styles.sidebar}>
            <div>
                <ArtCard />
            </div>
        </div>
    )
}

export default SideComponent