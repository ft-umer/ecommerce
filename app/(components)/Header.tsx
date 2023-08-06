import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ p: 1, backgroundColor: '#333' }} className='mb'>
      <Toolbar sx={{ justifyContent: 'space-between', pr: 4, pl: 4 }}>
        {/* Brand logo on the left side */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link className='a' href={'/'}>
            E-commerce Store
          </Link>
        </Typography>

        {/* Links on the right side */}
        <div>
          <Link href="/" className='a a_h' color="inherit">
            Home
          </Link>
          <Link href="/SignIn" className='a a_h' color="inherit">
            SignIn
          </Link>
          /
          <Link href="/SignUp" className='a a_h' color="inherit">
            SignUp
          </Link>
          <Link href="/" className='a a_h' color="inherit">
            Cart
          </Link>
          <Link href="/Checkout" className='a a_h' color="inherit">
            Checkout
          </Link>
          {/* Add more links as needed */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
