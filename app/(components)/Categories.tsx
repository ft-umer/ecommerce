"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import NextLink from 'next/link';

const categoriesData = [
  {
    name: 'CLOTHES',
    imageUrl: '/clothes.jpg',
  },
  {
    name: 'SHOES',
    imageUrl: '/shoes.jpg',
  },
  {
    name: 'ELECTRONICS',
    imageUrl: '/electronics.jpeg',
  },
  {
    name: 'Furniture',
    imageUrl: '/furniture.jpg',
  },
  // Add more categories as needed
];

interface CategoryCardProps {
  name: string;
  imageUrl: string;
}



const CategoryCard: React.FC<CategoryCardProps> = ({ name, imageUrl }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <NextLink  href={`/category/${name.toLowerCase()}`} passHref>
    <Card
      className={isZoomed ? 'zoomed' : ''}
      onMouseEnter={() => setIsZoomed(true)}
      onMouseLeave={() => setIsZoomed(false)}
    >
      <CardMedia component="img" height="200" image={imageUrl} alt={name} />
      <CardContent>
        <Typography variant="h6" component="div" align="center">
          {name}
        </Typography>
      </CardContent>

      <style jsx>{`
        .zoomed {
          position: relative;
        }

        .zoomed:hover img {
          transform: scale(1.1);
        }

        .zoomed img {
          transition: transform 0.3s ease;
        }
      `}</style>
    </Card>
    </NextLink>
  );
};

const CategoriesPage = () => {
  return (
    <Container maxWidth="lg">
      <Typography color={'rgb(19, 19, 19)'} variant="h4" fontWeight={700} align="center" mb={6} gutterBottom>
          Welcome to Our E-commerce Store!
        </Typography>
      <Grid container spacing={2}>
        {categoriesData.map((category, index) => (
          <Grid className='zoomed' item key={index} xs={12} sm={6} md={3}>
            <CategoryCard name={category.name} imageUrl={category.imageUrl} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoriesPage;
