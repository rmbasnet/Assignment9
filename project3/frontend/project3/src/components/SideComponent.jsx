import React from 'react';
import styles from '../styles/SideComponent.module.css';
import ArtCard from './ArtCard';

function SideComponent({ artData, onArtSelect, onFormSelect }) {
    const handleCardClick = (art) => {
        onArtSelect(art); // For selecting the artwork
        onFormSelect(art); // For showing the form
    };

    return (
        <div className={styles.sidebar}>
            {artData.map((art) => (
                <div
                    key={art._id}
                    className={styles.artCardWrapper}
                    onClick={() => handleCardClick(art)}
                >
                    <ArtCard
                        art={art}
                        onEditClick={() => onFormSelect(art)}
                    />
                </div>
            ))}
            <span>
                <p>Riam Basnet</p>
                <p>239582520</p>
                <p>rbasnet@algomau.ca</p>
                <p>6th July 2025</p>
                <p>7:44pm</p>

            </span>
        </div>
    );
}

export default SideComponent;