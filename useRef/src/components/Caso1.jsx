import { useEffect, useRef, useState } from 'react'

export default function Caso1() {
	const [name, setName] = useState()
	const renders = useRef(0)

	useEffect(() => {
		renders.current = renders.current + 1
	})

	return (
		<>
			<h2>Keep in storage how many times the component rendered</h2>

			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<p>Hello! My name is {name}</p>
			<p>This component was rendered {renders.current} times!</p>
		</>
	)
}
