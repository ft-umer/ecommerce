import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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

        {/* Cart icon and Register/Login links on the right side */}
        <div>
          <IconButton color="inherit" aria-label="cart">
            <ShoppingCartIcon />
          </IconButton>
          <Link href="/SignIn" className='a a_h' color="inherit">
            Sign In
          </Link>
          /
          <Link href="/SignUp" className='a a_h' color="inherit">
            Sign Up
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
