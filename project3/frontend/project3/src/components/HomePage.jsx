import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavBar from './NavBar';
import SideComponent from './SideComponent';
import FormBody from './FormBody';
import styles from '../styles/HomePage.module.css';
import { Toaster } from 'react-hot-toast';

function HomePage() {
    const [artData, setArtData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    const [selectedArt, setSelectedArt] = useState(null);

    const handleArtSelect = (art) => {
        setSelectedArt(art);
        setShowForm(true);
    };

    const handleFormSelect = (art) => {
        setShowInfo(true);

    }


    useEffect(() => {
        const fetchArt = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/art");
                setArtData(res.data); // Directly use res.data instead of await
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to load artwork data. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchArt();
    }, []);

    if (loading) {
        return (
            <div className="loading-screen">
                <div className="loading-spinner"></div>
                <p>Loading artwork collection...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-screen">
                <h2>Error Loading Content</h2>
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    }


    // Main content only renders when data is available
    return (
        <div className={styles.pageContainer}>
            <Toaster position="top-right" />
            <NavBar />
            <main className={styles.contentArea}>
                <SideComponent
                    artData={artData}
                    onArtSelect={handleArtSelect}
                    onFormSelect={handleFormSelect}
                />
                {showForm && (
                    <FormBody artData={selectedArt} showInfo={showInfo} />
                )}

            </main>
        </div>
    );
}

export default HomePage;