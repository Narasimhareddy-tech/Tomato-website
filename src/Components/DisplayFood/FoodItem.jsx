import React from 'react'
import { useContext } from 'react'
import { StoreContext } from "../../StoreContext/StoreContext"
import './FoodItem.css'
import { assets } from '../../assets/assets'
const FoodItem = ({category}) => {
    const {food_list,cart,addToCart,removeFromCart}=useContext(StoreContext);
   const filtered = category === "All"
        ? food_list                                             
        : food_list.filter((item) => item.category === category)
  return (
    <div>
        <h1>Top Dishes Near You</h1>
    <div className='Food-items'>
        {filtered.map((items)=>{
            return (
                
                   <div key={items._id}>
                    <div className='image-item'>
                        <img src={items.image} alt={items.name} />
                        <div className='btn-display'>
                         <button className='remove-btn' onClick={()=>removeFromCart(items._id)}>-</button>
                         <p>{cart[items._id]}</p>
                         <button className='add-btn' onClick={()=>addToCart(items._id)}>+</button>
                         </div>
                        </div>
                        <img src={assets.rating_starts} alt="" />
                         <p>{items.category}</p>
                        <p>${items.price}</p>
                        <p>{items.description}</p>
                    </div>
            )
        })}
                   
    </div>
     </div>
  )
}
export default FoodItem;