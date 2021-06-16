// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  // const [error, setError] = React.useState(null)

  const handleSubmit = event => {
    event.preventDefault()

    // onSubmitUsername(event.target.elements[0].value)
    // onSubmitUsername(event.target.elements.usernameInput.value)  // with id of the label/input
    // return event.target.elements[0].value
    console.log('inputRef', inputRef?.current?.value)
    // if (isValid) {
    onSubmitUsername(inputRef?.current?.value)
    return inputRef?.current?.value
    // }
  }

  const inputRef = React.useRef(null)
  const [value, setValue] = React.useState('')

  const handleChange = event => {
    setValue(event?.target?.value)

    // const { value } = event?.target
    // const isLowerCase = value === value?.toLowerCase()
    // setError(isLowerCase ? null : 'Username must be lower case')
  }

  // const isValid = value === value.toLowerCase()

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          onChange={handleChange}
          ref={inputRef}
          value={value?.toLocaleLowerCase()}
          id="usernameInput"
          type="text"
        />
      </div>

      {/* <button disabled={Boolean(error)} type="submit"> */}
      <button type="submit">Submit</button>
      {/* {error && <p role="alert">User name must be lower case</p>} */}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
