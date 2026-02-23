import ButtonExternal from './ButtonExternal.jsx'
import ButtonModule from './Button/Button.jsx'
import ButtonInline from './ButtonInline.jsx'

// Style REACT components with CSS
// 1 - EXTERNAL (from index.css file in src)
// 2 - MODULES (avoids naming conflicts, naming through hashing algorithm, unique namings)
// 3 - INLINE (prevents global style conflicts, good for minimum styling, less maintainable)


function App() {

  return (
    <>
      <ButtonExternal/>
      <ButtonModule/>
      <ButtonInline/>
    </>
  )
}

export default App
