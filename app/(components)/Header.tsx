"use client"

import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import ListAltIcon from '@mui/icons-material/ListAlt';
import NextLink from 'next/link';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';

const Navbar = () => {
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event:any) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <AppBar position="static" sx={{ p: 1, backgroundColor: '#333' }} className='mb'>
      <Toolbar sx={{ justifyContent: 'space-between', pr: 4, pl: 4 }}>
        {/* Brand logo on the left side */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link className='a' href={'/'}>
            E-commerce Store
          </Link>
        </Typography>

        {/* Cart icon and dropdown menu */}
        
          <Menu
            anchorEl={menuAnchor}
            open={Boolean(menuAnchor)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link href="/Cart" className='cart_links' color='black'>
              <ShoppingCartIcon className='cart_icons' /> Cart
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/Checkout" className='cart_links' color='black'>
              <PaymentIcon  className='cart_icons'/> Checkout 
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link href="/Orders" className='cart_links' color='black'>
              <ListAltIcon className='cart_icons' /> Orders
              </Link>
            </MenuItem>
          </Menu>
          <Link href="/SignIn" className='a a_h' color="inherit">
            Sign In
          </Link>
          /
          <Link href="/SignUp" className='a a_h' color="inherit">
            Sign Up
          </Link>
          <IconButton color="inherit" aria-label="cart" onClick={handleMenuOpen}>
            <ShoppingCartIcon />
          </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
