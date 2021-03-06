import React , { useState, useEffect } from 'react'

import { Products , Navbar } from './components';
/* import { commerce } from './components/lib/commerce'; */
import { commerce } from './components/lib/commerce';

const App = () => {
  const [products, setProducts]  = useState([]);

  const fetchProducts = async () => {
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
      <Products product={products}/>
    </div>
  )
}
export default  App;