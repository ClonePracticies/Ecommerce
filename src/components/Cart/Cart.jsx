import React from 'react';
import {Container , Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart,  handleEmptyCart }) => { 
  
 /*  const isEmpty =  cart.line.item.length === 0; */

  /* !0 means zero falsy which means True  */
  /* it says if !cart.line.item.length which !(any number) which means the cart is not empty */
  const classes = useStyles();
  const EmptyCart = () => (
    <Typography variant="subtitle">You have no item in your cart,  <Link to="/" className = {classes.link}> Start adding some </Link>! 
    </Typography>

    );
  
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        { cart.line_items.map( (item) => (
          <Grid item xs={12} sm={4} key={item.id} > 
            <CartItem item={item} onUpdateCartQty ={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
          </Grid>
          ))}
       </Grid>

          <div className = {classes.cardDetails}> 
            <Typography variant="h4"> subtotal: { cart.subtotal.formatted_with_symbol }</Typography>
            <div>
              <Button className={classes.EmptyButton} size="large" type="button" variant = "contained" color = "secondary" onClick={handleEmptyCart} >Empty Cart </Button>
              <Button component={Link} to ="/checkout" className={classes.checkoutButton} size="large" type="button" variant = "contained" color = "Primary" > Checkout </Button>
            </div>
          </div>
     
    </>
  );
  if (!cart.line_items) return 'Loading';

  return (
    <Container>
      {/* <div  className={classes.toolbar} /> */}
      <Typography className={classes.title}  variant="h3" gutterBottom >Your Shopping Cart</Typography>
      {/* using ternary operator and showing empty card else show filled cart */}
      { !cart.line_items.length ? <EmptyCart/> : <FilledCart /> }
            
    </Container>
  )
}

export default Cart;
