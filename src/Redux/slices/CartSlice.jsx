import { createSlice } from "@reduxjs/toolkit";
const CartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state, actions)=>{
            const existingItems = state.cart.find(
                (item)=> item.id === actions.payload.id
            );
            if(existingItems){
               state.cart= state.cart.map((item)=>item.id === actions.payload.id ?{...item,qty:item.qty+1}:item)
            }
            else{

                state.cart.push(actions.payload);
            }
        },
        removeFromCart:(state,action)=>{
            state.cart = state.cart.filter((item)=>item.id !== action.payload.id);
        },
        incrementQty:(state,action)=>{
            state.cart= state.cart.map((item)=>
            item.id === action.payload.id ? {...item,qty:item.qty + 1}:item)
        },
        decrementQty:(state,action)=>{
            state.cart= state.cart.map((item)=>
            item.id === action.payload.id ? {...item,qty:item.qty - 1}:item)
        },
    },
});

export const {addtoCart,removeFromCart,incrementQty,decrementQty} = CartSlice.actions;
export default CartSlice.reducer;