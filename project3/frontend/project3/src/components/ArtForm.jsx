import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import api from "../lib/axios";
import styles from '../styles/ArtForm.module.css';
import toast, { Toaster } from 'react-hot-toast';


function ArtForm({ artData }) {
    const [formData, setFormData] = useState({
        FirstName: '',
        LastName: '',
        YearOfWork: '',
        GallaryCountry: '',
        GallaryCity: '',
        GallaryName: '',
        Medium: '',
        Cost: '',
        WikiLink: '',
        Description: ''
    });
    const [saving, setSaving] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    // Initialize form data
    useEffect(() => {
        if (artData) {
            setFormData(artData);
        }
    }, [artData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async () => {
        setSaving(true);

        try {
            const response = await api.put(`/art/${id}`, formData);
            toast.success("Artwork updated successfully");
        } catch (error) {
            console.error("Update Error:", error);
            toast.error('Failed to update information. ');
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className={styles.formBody}>
            <TextField
                name="FirstName"
                label="Artist's First Name"
                variant="standard"
                value={formData.FirstName || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                name="LastName"
                label="Artist's Last Name"
                variant="standard"
                value={formData.LastName || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                name="YearOfWork"
                label="Year Of Work"
                variant="standard"
                value={formData.YearOfWork || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                name="GallaryCountry"
                label="Gallery Country"
                variant="standard"
                value={formData.GallaryCountry || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                name="GallaryCity"
                label="Gallery City"
                variant="standard"
                value={formData.GallaryCity || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                name="GallaryName"
                label="Gallery Name"
                variant="standard"
                value={formData.GallaryName || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                name="Medium"
                label="Medium"
                variant="standard"
                value={formData.Medium || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                name="Cost"
                label="Cost"
                variant="standard"
                value={formData.Cost || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                name="WikiLink"
                label="WikiLink"
                variant="standard"
                value={formData.WikiLink || ''}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <TextField
                name="Description"
                label="Description"
                variant="standard"
                value={formData.Description || ''}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                margin="normal"
            />

            <Button
                variant="contained"
                color="primary"
                onClick={handleSave}
                disabled={saving}
                sx={{ mt: 3 }}
            >
                {saving ? "Saving..." : "Save Changes"}
            </Button>
        </div>
    );
}

export default ArtForm;