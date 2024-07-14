import React, { useState } from 'react';
import FilterSidebar from './Filter';
import tovar from '../../utils/tovarData'; // Make sure to adjust the import path accordingly
import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const ProductPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(tovar);

  const handleFilterChange = (filters) => {
    let updatedProducts = tovar;

  
    if (filters.priceRange) {
      updatedProducts = updatedProducts.filter(
        (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }


    if (filters.selectedCountries) {
      const selectedCountries = Object.keys(filters.selectedCountries).filter(
        (country) => filters.selectedCountries[country]
      );
      if (selectedCountries.length > 0) {
        updatedProducts = updatedProducts.filter((product) =>
          selectedCountries.includes(product.country)
        );
      }
    }


    if (filters.condition) {
      const selectedConditions = Object.keys(filters.condition).filter(
        (cond) => filters.condition[cond]
      );
      if (selectedConditions.length > 0) {
        updatedProducts = updatedProducts.filter((product) =>
          selectedConditions.includes(product.condition) 
        );
      }
    }

    setFilteredProducts(updatedProducts);
  };

  return (
    <Box display="flex">
      <FilterSidebar onFilterChange={handleFilterChange} />
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.alt}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.desc}
                  </Typography>
                  <Typography variant="body2" color="text.primary">
                    {product.price.toLocaleString()} ₽
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductPage;
