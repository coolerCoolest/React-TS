import { createSlice, configureStore } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state: number) => {
      console.log("increment");
      state += 1;
    },
    decrement: (state: number) => {
      console.log("decrement");
      state -= 1;
    },
  },
})

console.log(counterSlice, 123);

export const { increment, decrement } = counterSlice.actions

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
})
console.log("store changed", store.getState(), 222);

store.subscribe(() => {
  console.log("store changed", store.getState());
})

export default store


// import { createStore } from 'redux'

// const defaultState = {
//   counter: 0
// }

// const reducers = (state = defaultState, action) => {
//   switch (action.type) {
//     case 'increment':
//       console.log('increment');
//       return { counter: state.counter + 1 }
//     case 'decrement':
//       console.log('decrement');
//       return { counter: state.counter - 1 }
//     default:
//       return state
//   }
// }

// const store = createStore(reducers)

// store.subscribe(() => {
//   console.log('store changed', store.getState());
// })

// export default store