import React, { useState, useEffect } from 'react'

import { Products, Navbar, Cart } from './components';
import { commerce } from './components/lib/commerce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});


  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
    /* setting the cart and setting it to state  */
  }

  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    /* to update our cart */
    setCart(cart);
  }
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  }
  const handleRemoveFromCart = async (lineItemId) => {
  const { cart } = await commerce.cart.remove(lineItemId);
  setCart(cart);
}

const handleEmptyCart = async () => {
  const { cart } = await commerce.cart.empty();
  setCart(cart);
}

useEffect(() => {
  fetchProducts();
  fetchCart();
}, []);
/* the array here means that it's just going to run at first and it is similar to component did mount  */

console.log(cart);

return (
  < Router>
    <div>
      <Navbar totalItems={cart.total_items} />
      <Switch>
        <Route exact path="/" >
          <Products products={products} onAddToCart={handleAddToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart cart={cart}

            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}
          />
        </Route>



      </Switch>

    </div>
  </Router>

)
}
export default App;