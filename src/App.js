import React , { useState, useEffect } from 'react'

import { Products , Navbar } from './components';
/* import { commerce } from './components/lib/commerce'; */
import { commerce } from './components/lib/commerce';

export default function App() {
  const [products, setProducts]  = useState([]);

  const fetchProducts = async (req, res) => {
    /* like .then .catch  we want to catch sth which gets from this api Commerce and this is a promise we have to await to see what is inside that promise and the response is that data ( our product)  */
    const {data} = await commerce.products.list();

    setProducts(data);
  }
  useEffect(() => {
    fetchProducts();
  }, []); 
  /* the array here means that it's just going to run at first and it is similar to component did mount  */
  console.log(products);


  return (
    <div>
      <Navbar />
      <Products />
    </div>
  )
}
