import React, { useState } from 'react'

const Heading = ({ text }) => <h1> {text} </h1>;

const Button = ({ handleClick, text }) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
    return (
        <div>
            {!all ? (
                <div>
                    <h1>No feedback yet </h1>
                </div>
            ) : (
                <div>
                    <Total text='good' amount={good} />
                    <Total text='neutral' amount={neutral} />
                    <Total text='bad' amount={bad} />
                    <Total text='all' amount={all} />
                    <Total text='average' amount={average} />
                    <Total text='positive' amount={positive + '%'} />
                </div>
            )}
        </div>
    );
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

    const all = good + neutral + bad;
    const average = all / 3;
    const positive = (good / all) * 100;

    return (
        <div>
            <Heading text='give feedback' />
            <Button handleClick={() => setGood(good + 1)} text='good' />
            <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
            <Button handleClick={() => setBad(bad + 1)} text='bad' />
            <Heading text='statistics' />
            <Statistics good={good}
                neutral={neutral} bad={bad} all={all}
                average={average}
                positive={positive} />
        </div>
    )
}

export default App
