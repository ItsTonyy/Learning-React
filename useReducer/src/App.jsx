import { useReducer, useState } from 'react'

const reducer = (state, action) => {
	switch (action.type) {
		case 'add-task':
			return {
				...state,
				tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
				taskCount: state.taskCount + 1,
			}
		case 'toogle-task':
			return {
				...state,
				tasks: state.tasks.map((item, index) =>
					index === action.payload
						? { ...item, isCompleted: !item.isCompleted }
						: item
				),
			}
		case 'clear-tasks':
			return {
				tasks: []
			}
		default:
			return state
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, { tasks: [], taskCount: 0 })

	const [inputValue, setInputValue] = useState('')

	return (
		<div className='main-div'>
			<h1>Use useReduce when your state is too complex</h1>

			<div className='controller'>
				<input
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button
					onClick={() => {
						dispatch({ type: 'add-task', payload: inputValue })
						setInputValue('')
					}}
				>
					Add
				</button>
				<button
					onClick={() => {
						dispatch({ type: 'clear-tasks', payload: state })
					}}
				>
					clear
				</button>
				<button className='number-tasks'>
					Number of Tasks: {state.taskCount}
				</button>
			</div>

			{state.tasks.map((task, index) => (
				// eslint-disable-next-line react/jsx-key
				<div className='outer-box'>
					<p
						onClick={() => dispatch({ type: 'toogle-task', payload: index })}
						style={{
							textDecoration: task.isCompleted ? 'line-through' : 'none',
						}}
					>
						{task.name}
					</p>
				</div>
			))}
		</div>
	)
}

export default App
