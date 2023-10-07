import React, { useReducer } from 'react';

/*
You should use useReducer over useState when:

Your state updates are complex and/or involve multiple state values: 
  useReducer allows you to manage complex state updates in a centralized manner. 
  You can manage multiple state values in a single reducer function and update them in response to actions.

You need to perform logic before updating state: 
  With useReducer, you can perform any logic you need in the reducer function before updating the state, 
  making it a good choice for managing state that requires complex logic.

You want to make your state updates more predictable and easier to debug: 
  useReducer provides a clear, centralized place for state updates, 
  making it easier to debug and trace the flow of state updates in your components.

You want to share state updates across multiple components: 
  With useReducer, you can pass the dispatch function to child components and have them dispatch actions to trigger state updates, 
  making it a good choice for managing state that needs to be shared across multiple components.

In general, useReducer is a more powerful and flexible state management solution than useState, 
but it may have a steeper learning curve. If your state updates are simple and involve only a single value, 
useState may be a good choice for your needs.
*/

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>Count: {state.count}</div>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
};

export default CounterReducer;
