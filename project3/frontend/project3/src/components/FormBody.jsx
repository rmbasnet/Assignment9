import React, { useState, useEffect } from 'react';
import styles from "../styles/FormBody.module.css";
import ArtForm from './ArtForm';
import api from "../lib/axios";
import { useParams } from 'react-router';
import Button from '@mui/material/Button';

function FormBody({ artData, showInfo }) {
    const [art, setArt] = useState(null);
    const [selectedArt, setSelectedArt] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        console.log("Current ID:", id);
    }, [id]);


    useEffect(() => {
        const fetchArtInformation = async () => {
            try {
                const res = await api.get(`/art/${id}`);
                setArt(res.data);
                setSelectedArt(res.data);
            } catch (error) {
                console.error("Error fetching art:", error);
            }
        };

        if (id) {
            fetchArtInformation();
        } else if (artData) {
            setSelectedArt(artData);
        }
    }, [id, artData]);

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className={styles.mainBody}>
            <p style={{ fontSize: "40px", color: "white" }}>{selectedArt?.Title || 'Picture Name'}</p>
            <hr />

            <span style={{ color: 'darkblue' }}>
                <h4 >Description</h4>
                <p>{selectedArt?.Description || 'No description available'}</p>
            </span>

            <Button
                variant="contained"
                onClick={handleToggleForm}
                style={{ margin: '20px 0' }}
            >
                {showForm ? 'Cancel Edit' : 'Edit Artwork'}
            </Button>

            {showForm && selectedArt && (
                <ArtForm
                    key={selectedArt._id || selectedArt.id}
                    artData={selectedArt}
                />
            )}
        </div>
    );
}

export default FormBody;