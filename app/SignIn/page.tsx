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
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';

const defaultTheme = createTheme();

export default function SignIn() {
  const router = useRouter();

  const handleSubmit = async (event :React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    
    try {
      const E_commerce = process.env.BACKEND_URL
      // Send the login data to the backend API
      const response = await axios.post(`${E_commerce}/login`, {
        email: formData.get('email'),
        password: formData.get('password'),
      });

      // Handle successful login
      console.log('Logged in successfully:', response.data);

      toast.success('Logged in Successfully!', {
        position: 'top-center',
        autoClose: 3000, // Time in milliseconds to close the toast automatically
        hideProgressBar: false, // Show or hide progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the autoClose timer when hovered
        draggable: true, // Allow dragging the toast
        progress: undefined, // A custom progress bar component
    });
    setTimeout(() => {
        router.push('/');
    }, 3000);
    } catch (error:any) {
      
      console.error('Error logging in:', error);
      if (error.response && error.response.data.error === 'Invalid credentials') {
        toast.error('Incorrect password!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
        })}
      toast.error('Error logging in!', {
        position: 'top-center',
        autoClose: 3000, // Time in milliseconds to close the toast automatically
        hideProgressBar: false, // Show or hide progress bar
        closeOnClick: true, // Close the toast when clicked
        pauseOnHover: true, // Pause the autoClose timer when hovered
        draggable: true, // Allow dragging the toast
        progress: undefined, // A custom progress bar component
    });
    }
  };
  return (
    <ThemeProvider theme={defaultTheme}>
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary"  id='checkout'/>}
              label="Remember me"
              htmlFor='checkout'
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}