"use client"

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';


const darkTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976D2', // Change this to your desired primary color
        },
        secondary: {
            main: '#f50057', // Change this to your desired secondary color
        },
    },
});


export default function SignUp() {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        c_password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password === formData.c_password) {
            try {
                // Send the user data to the backend API
                const response = await axios.post('http://localhost:5000/api/createUsers', formData);
                console.log('User created:', response.data);
                toast.success('Sign Up Successfully!', {
                    position: 'top-center',
                    autoClose: 3000, // Time in milliseconds to close the toast automatically
                    hideProgressBar: false, // Show or hide progress bar
                    closeOnClick: true, // Close the toast when clicked
                    pauseOnHover: true, // Pause the autoClose timer when hovered
                    draggable: true, // Allow dragging the toast
                    progress: undefined, // A custom progress bar component
                });
                setTimeout(() => {
                    router.push('/SignIn');
                }, 3000);
                // Handle success, show a success message or redirect to another page
            } catch (error) {
                if (error.response && error.response.data.error === 'Email already exists') {
                    toast.warning('Email already exists', {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                    });
                } else {
                    console.error('Error creating user:', error);
                    toast.error('Error creating user', {
                        position: 'top-center',
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                    });
                }
                // Handle error, display error message to the user
            }
        } else {
            toast.warning('Password did not matched', {
                position: 'top-center',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
            });
        }
    };
    return (
        <ThemeProvider theme={darkTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} method="POST" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="given-name"
                                    name="name"
                                    required
                                    onChange={handleChange}
                                    value={formData.name}
                                    fullWidth
                                    id="name"
                                    label="Name"
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={formData.email}
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={formData.password}
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    onChange={handleChange}
                                    value={formData.c_password}
                                    fullWidth
                                    name="c_password"
                                    label="Confirm Password"
                                    type="password"
                                    id="c_password"
                                    autoComplete="new-password"
                                />
                            </Grid>

                        </Grid>
                        <Button
                            type="submit"

                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/SignIn" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    );
}