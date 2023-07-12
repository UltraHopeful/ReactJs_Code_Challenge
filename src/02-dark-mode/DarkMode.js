import { useState } from "react"

export default function DarkMode () {
  const [colorMode, setColorMode] = useState(false)
  return (
    <div className={`page ${colorMode && 'dark-mode'}`}>
      <button className='dark-mode-button'onClick={() => setColorMode(true)}>Dark Mode</button>
      <button className='light-mode-button'onClick={() => setColorMode(false)}>Light Mode</button>
    </div>
  )
}
