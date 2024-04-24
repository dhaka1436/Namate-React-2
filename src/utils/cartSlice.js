import { createSlice, current } from "@reduxjs/toolkit";



const cartSlice = createSlice({

    name : 'cart',
    initialState : {
        items : []
    },

    reducers : {

        addItem : (state,action) => {
            // this is a reducer function
            // state is basically the initial state

            // mutating the state over here
            
            // in redux we'll have to mutate the state and there is no other way
            // earlier in vanila redux returning was fully mandatory

            state.items.push(action.payload);
        },

        removeItem : (state,action) => {
            state.items.pop();
        },

        clearCart : (state,action) => {
            state.items.length = 0;
            // state = [] won't work because
            // we are not mutating the state we are simply changing the reference
            console.log(state); // redux creates a proxy object for us here

            console.log(current(state));
            // fully removing all the elements from the cart
            // or can do return {items : []}; this also will clear my caretColor: 
        },
    },
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer