import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';


const products = [
 { id: '1', name: 'Shoes', description:'Running Shoes.', price: '10£', image:'https://images.unsplash.com/photo-1614796344764-e3158c0dbb13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1623&q=80'},
 { id: '2', name: 'Macbook', description:'Apple product', price: '10£', image: 'https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80'}
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

 