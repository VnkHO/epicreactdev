// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// function countReducer(currentState, newState) {
//   return newState
// }

function countReducer(state, action) {
  console.log('state', state)
  console.log('action', action)
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.step}
      break

    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
