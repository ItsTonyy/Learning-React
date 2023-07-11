import { useEffect, useRef, useState } from 'react'

export default function Caso2() {
 
  const [name, setName] = useState()

  const inputRef = useRef()

  const focusInput = () => {
    inputRef.current.focus()
  }

  return ( 
    <>
      <br />
      <h2>Make a Reference to HTML</h2>

      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />
      <br />
      <br />
      <button onClick={focusInput}>Focus</button>
    </>
  )
}
