import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },

    removeFromBasket: (state, action) => {
     const index = state.items.findIndex(item=> item.id === action.payload.id)
     let newBaskets = [...state.items]

     if(index >= 0){
        newBaskets.splice(index, 1)
     }else{
        console.warn("No item in the baskets")
     }

     state.items = newBaskets
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket} =basketSlice.actions

export const selectBasketItems = (state)=> state.basket.items
export const selectBasketItemsWithId = (state, id)=> state.basket.items.filter(item=> item.id === id)
export const selectBasketTotal = (state)=> state.basket.items?.reduce((total, item)=>{
  return total += item?.price
}, 0)
export default basketSlice.reducer