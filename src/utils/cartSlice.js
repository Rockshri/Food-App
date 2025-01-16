import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
      name:"cart",
      initialState: {
        items:[],
      },
      //actions are mapped with the reducer functions
      reducers : {
        //mutating the state over here..
               addItems : (state, action)=>{
                     state.items.push(action.payload);     
               },
               removeItem : (state, action)=>{
                     state.items.pop();
               },
               clearCart : (state, action)=>{
                     state.items.length = 0; //[]
               },
      }
})


export const {addItems, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;