import React from 'react'
import styles from '../styles/SideComponent.module.css'
import ArtCard from './ArtCard'

function SideComponent({ artData }) {

    // fetch the api into this side component to display all the art pieces
    // repeat the art card
    console.log(artData)
    return (
        <div className={styles.sidebar}>
            {artData.map((art) => {
                return <ArtCard art={art} />
            })}

        </div>
    )
}

export default SideComponent