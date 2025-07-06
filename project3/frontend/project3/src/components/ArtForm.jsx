import React, { useEffect, useState } from 'react'
import api from "../lib/axios";
import { useParams } from 'react-router';

import TextField from '@mui/material/TextField';
import styles from '../styles/ArtForm.module.css'
import TextareaAutosize from '@mui/material/TextareaAutosize';

function ArtForm({ artData }) {

    const [art, setArt] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const fetchArtInformation = async () => {
            try {
                const res = await api.get(`/art/${id}`);
                setArt(res.data);
            } catch (error) {
                console.log("error in ARTFORM.JSZ, ", error);

            }
        }
        fetchArtInformation();
    }, [id]);


    return (
        <div className={styles.formBody}>
            <TextField id="standard-basic" label="Artist's First Name" variant="standard" defaultValue='PLACEHOLDER TEXT' />
            <br />
            <br />

            <TextField id="standard-basic" label="Artist's Last Name" variant="standard" defaultValue='PLACEHOLDER TEXT' />
            <br />
            <br />

            <TextField id="standard-basic" label="Year Of Work" variant="standard" defaultValue='PLACEHOLDER TEXT' />
            <br />
            <br />

            <TextField id="standard-basic" label="Gallery Country" variant="standard" defaultValue='PLACEHOLDER TEXT' />
            <br />
            <br />

            <TextField id="standard-basic" label="Gallery City" variant="standard" defaultValue='PLACEHOLDER TEXT' />
            <br />
            <br />

            <TextField id="standard-basic" label="Gallery Name" variant="standard" defaultValue='PLACEHOLDER TEXT' />
            <br />
            <br />

            <TextField id="standard-basic" label="Medidum" variant="standard" defaultValue='PLACEHOLDER TEXT' />
            <br />
            <br />

            <TextField id="standard-basic" label="Cost" variant="standard" defaultValue='PLACEHOLDER TEXT' />
            <br />
            <br />

            <TextField id="standard-basic" label="WikiLink" variant="standard" defaultValue='PLACEHOLDER TEXT' />
            <br />
            <br />

            <TextField id="standard-basic" label="Description" variant="standard" defaultValue='PLACEHOLDER TEXT' />
            <br />
            <br />

        </div>
    )
}

export default ArtForm