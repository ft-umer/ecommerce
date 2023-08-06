import React from 'react';
import { Container, Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ marginTop: '100px', backgroundColor: '#333', color:'#cfcfcf' }}>
      <Container maxWidth="lg">
        <Box py={2} textAlign="center">
          <Typography variant="body2">
            © {new Date().getFullYear()} E-commerce. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
