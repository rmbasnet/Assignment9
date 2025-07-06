import * as React from 'react';
import { Link } from "react-router";
import FormBody from './FormBody';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ArtCard({ art, onArtSelect }) {
    const theme = useTheme();

    return (
        <>
            <Card sx={{ display: 'flex' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 200, height: 200 }}
                    image={`https://placehold.co/600x400?text=${encodeURIComponent(art.Title)}`}
                    alt={art.Description}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            {art.Title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            {art.Artist}
                        </Typography>
                        <Link to={`/art/${art._id}`}>
                            <Button variant="contained" >Edit Art</Button>
                        </Link>
                    </CardContent>
                </Box>
            </Card>
        </>
    );
}
