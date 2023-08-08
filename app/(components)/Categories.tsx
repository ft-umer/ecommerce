import React from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

const categoriesData = [
  {
    name: 'Category 1',
    imageUrl: '/clothes.jpg',
  },
  {
    name: 'Category 2',
    imageUrl: '/clothes.jpg',
  },
  {
    name: 'Category 3',
    imageUrl: '/clothes.jpg',
  },
  {
    name: 'Category 3',
    imageUrl: '/clothes.jpg',
  },
  // Add more categories as needed
];

interface CategoryCardProps {
  name: string;
  imageUrl: string;
}


const CategoryCard: React.FC<CategoryCardProps> = ({ name, imageUrl }) => {
  return (
    <Card>
      <CardMedia component="img" height="200" image={imageUrl} alt={name} />
      <CardContent>
        <Typography variant="h6" component="div" align="center">
          {name}
        </Typography>
      </CardContent>
    </Card>
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
          <Grid item key={index} xs={12} sm={6} md={3}>
            <CategoryCard name={category.name} imageUrl={category.imageUrl} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategoriesPage;
