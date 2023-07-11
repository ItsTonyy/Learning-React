import { useRef, useEffect, useState } from 'react'

export default function Caso3() {
  const [name, setName] = useState()

  const previousName = useRef()

  useEffect(() => {
    previousName.current = name
  }, [name])


  return ( 
    <>
      <br />
      <br />
      <h2>Keep the previous value of state</h2>

      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>the actual value is: {name}</p>
      <p>The previous value was: {previousName.current}</p>
    </>
  )
}
