import { createContext, useState } from "react";
import { food_list } from "../assets/assets"
export const StoreContext=createContext();
const ContextProvider=({children})=>{
    const [cart,setCart]=useState({});
    const addToCart=(id)=>{
        if(cart[id]){
        setCart({...cart,[id]:cart[id]+1});
        }
        else{
            setCart({...cart,[id]:1})
        }
    }
    const removeFromCart=(id)=>{
        if(cart[id]>1){
            setCart({...cart,[id]:cart[id]-1});
        }
        else{
            setCart({...cart,[id]:""});
        }
    }
    const gettotalamount=()=>{
        let totalamount=0;
        
        for(const item in cart){
            if(cart[item]>0){
            let iteminfo=food_list.find((product)=>product._id===item);
            totalamount+=iteminfo.price*cart[item]
        }
    }
    return totalamount;
    }
    const value={
        food_list,
        cart,
        addToCart,
        removeFromCart,
        gettotalamount
    }
    return(
    <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>
    )

}
export default ContextProvider;