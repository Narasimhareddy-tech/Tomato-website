import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../../StoreContext/StoreContext'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
const {cart,food_list,removeFromCart,gettotalamount}=useContext(StoreContext);
const navigate=useNavigate();
const cartitems = food_list.filter((item) => cart[item._id] > 0)
  return (
    <div>
      <button onClick={()=>navigate('/')} className='back'>Back</button>
    <div className='cart'>
    <div className='cart-tems'>
        <div className="cart-items-title">
        <p>Items</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total_Price</p>
        <p>Remove</p>
    </div>
    <br />
    <hr />
    {cartitems.length === 0
        ? <p>Cart is empty!</p>
        : cartitems.map((item) => (
            <div>
            <div key={item._id} className='cart-items-title cart-items-item'>
                <img src={item.image} alt={item.name} />
                    <p className='cart-item-name'>{item.name}</p>
                    <p className='cart-item-price'>$ {item.price}</p>
                    <p className='cart-item-qty'>{cart[item._id]}</p>
                    <p className='cart-item-total'> $ {item.price * cart[item._id]}</p>
                    <p className='btn' onClick={()=>removeFromCart(item._id)}>X</p>
                </div>
                <hr />
                </div>
        ))
    }
    
</div>
        </div>
        <div className="cart-bottom">
            <div className="cart-total">
                <h2>Cart Total</h2>
                <div>
                    <div className="cart-total-details">
                        <p>SubTotal</p>
                        <p>${gettotalamount()}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Delivery Fee</p>
                        <p>${gettotalamount()===0?0:2}</p>
                    </div>
                    <hr />
                    <div className="cart-total-details">
                        <p>Total</p>
                        <p>${gettotalamount()===0?0:gettotalamount()+2}</p>
                    </div>
                    <hr />
                </div>
                <button onClick={()=>navigate('/Order')}>PROCCED TO CHECKOUT</button>
            </div>
            <div className="cart-promocode">
                <div>
                    <p>If you have promo code Enter, it here</p>
                    <div className='cart-promocode-input'>
                        <input type="text" placeholder='Promo Code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}


export default Cart;