import { useReducer } from 'react'

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment': { 
			return {
				counter: state.counter + 1,
			}
    }
		case 'decrement': { 
			return {
				counter: state.counter - 1,
			}
    }
		default: { 
			return state
    }
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, { counter: 0 })

	return (
		<div>
			<p>{state.counter}</p>
			<button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
		</div>
	)
}

export default App
