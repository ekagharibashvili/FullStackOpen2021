import React, { useState } from 'react'

const Heading = ({ text }) => <h1> {text} </h1>;

const Button = ({ handleClick, text }) => {
  return (
  <button onClick={handleClick}>
    {text}
  </button>
  )
}
const Total = ({ text, amount }) => {
  return (
    <p> {text} {amount} </p>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Heading text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Heading text='statistics' />
      <Total text='good' amount={good} />
      <Total text='neutral' amount={neutral} />
      <Total text='bad' amount={bad} />
    </div>
  )
}

export default App