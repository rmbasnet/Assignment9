import React, { useEffect, useState } from 'react';
import axios from "axios";
import NavBar from './NavBar';
import SideComponent from './SideComponent';
import FormBody from './FormBody';
import styles from '../styles/HomePage.module.css';

function HomePage() {
    const [artData, setArtData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    console.log(artData);

    // Main content only renders when data is available
    return (
        <div className={styles.pageContainer}>
            <NavBar />
            <main className={styles.contentArea}>
                <SideComponent artData={artData} />
                <FormBody artData={artData} />
            </main>
        </div>
    );
}

export default HomePage;