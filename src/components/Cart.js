import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Itemcards from "./Itemcards";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
     const dispatch = useDispatch();
     const cartItems = useSelector((store)=>store.cart.items);
     console.log(cartItems);
     
    //  if(cartItems == null) return;

    const clearCartHandler = ()=>{
       dispatch(clearCart());
    }
     
    return<>
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-4xl">Cart</h1>
      <button className="p-1 m-1 bg-black text-white rounded" onClick={clearCartHandler}>Clear cart</button>
   {cartItems.length == 0 ? (
       <div className="text-center m-4 p-6 text-6xl">No Food selected</div>
      ):(
        <div className="w-6/12 m-auto">
        <Itemcards list = {cartItems}/>
    </div>
   )
}
    
    </div>
    </>
}

export default Cart;