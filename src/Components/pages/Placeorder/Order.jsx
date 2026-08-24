import React, { useContext } from 'react'
import './Order.css'
import { StoreContext } from '../../../StoreContext/StoreContext'
const Order = () => {
  const {gettotalamount}=useContext(StoreContext)
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">
          Delivery Information
        </p>
        <div className="multiple-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multiple-fields">
          <input type="text" placeholder='City' />
           <input type="text" placeholder='State' />
        </div>
        <div className="multiple-fields">
          <input type="text" placeholder='Zip-code' />
           <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
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
                <button>PROCCED TO PAYMENT</button>
            </div>
      </div>
    </form>
  )
}
export default Order;