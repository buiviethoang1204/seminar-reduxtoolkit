



// // Khi chưa có Redux Toolkit
// // store.js
// import { createStore, applyMiddleware, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
// import rootReducer from './reducers';
// // Enable to use redux dev tool in development mode
// const composeEnhancers = 'development' === process.env.NODE_ENV
//     ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)
//     : compose;
// // Use redux-thunk as a redux middleware
// const enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
// const store = createStore(rootReducer, {}, enhancer);
// export default store;


// // Khi đã có redux toolkit 🤣
// // store.js
// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'
// const store = configureStore({ reducer: rootReducer })





// // Không có Redux Toolkit
// function counterReducer(state = 0, action) {
//     switch (action.type) {
//         case 'increment':
//             return state + action.payload
//         case 'decrement':
//             return state - action.payload
//         default:
//             return state
//     }
// }




// // Có Redux Toolkit
// // - Mỗi key là một case
// // - Không cần handle default case
// const counterReducer = createReducer(0, {
//     increment: (state, action) => state + action.payload,
//     decrement: (state, action) => state - action.payload
// })





// const todoReducer = createReducer([], {
//     addTodo: (state, action) => {
//         // 1. Có thể mutate data trực tiếp 🎉
//         state.push(action.payload)
//     },
//     removeTodo: (state, action) => {
//         // 2. Hoặc phải trả về state mới
//         // CHỨ KO ĐƯỢC cả 1 và 2 nha 😎
//         const newState = [...state];
//         newState.splice(action.payload, 1);
//         return newState;
//     }
// })



// // Không có redux toolkit
// const INCREMENT = 'counter/increment'
// function increment(amount) {
//     return {
//         type: INCREMENT,
//         payload: amount
//     }
// }
// const action = increment(3)
// // { type: 'counter/increment', payload: 3 }



// // Có redux toolkit
// const increment = createAction('counter/increment')
// const action = increment(3)
// // returns { type: 'counter/increment', payload: 3 }
// console.log(increment.toString())
// // 'counter/increment'



// const initialState = { value: 0 }
// const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//         increment(state) {
//             state.value++
//         },
//         decrement(state) {
//             state.value--
//         },
//         incrementByAmount(state, action) {
//             state.value += action.payload
//         },
//     },
// })
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
// export default counterSlice.reducer