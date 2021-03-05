import React from 'react';
import Grid from '@material-ui/core';

const products = [
 { id: '1, name: 'Shoes', description:'Running Shoes.', price: '10£'},
 { id: '2, name: 'Macbook', description:'Apple product', price: '10£'},

];

const Products = () => {
  return (
    <main>
      <Grid container justify="center" spacing={4} >
          {/* /* we are getting through the map a product and for each sth specific */}
        {products.map (product => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
            <Product  product={product}/>
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products;

 