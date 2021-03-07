import React , { useState, useEffect } from 'react'

import { Products , Navbar, Cart } from './components';
/* import { commerce } from './components/lib/commerce'; */
import { commerce } from './components/lib/commerce';

const App = () => {
  const [products, setProducts]  = useState([]);
  const [cart, setCart] = useState({});


  const fetchProducts = async () => {
    const {data} = await commerce.products.list();

    setProducts(data);
  }
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
    /* setting the cart and setting it to state  */
  }

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity); 
    /* to update our cart */
    setCart(item.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []); 
  /* the array here means that it's just going to run at first and it is similar to component did mount  */
 
  console.log(cart);

  return (
    
    <div>
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
      <Cart cart={cart} />
    </div>
  )
}
export default  App;