import React, { useState } from 'react'

const Heading = ({ text }) => <h1> {text} </h1>;

const Button = ({ handleClick1, text1, handleClick2, text2, handleClick3, text3 }) => {
    return (
        <>
            <button onClick={handleClick1}>
                {text1}
            </button>
            <button onClick={handleClick2}>
                {text2}
            </button>
            <button onClick={handleClick3}>
                {text3}
            </button>
        </>
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
                    <table>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid rgba(0, 0, 0)' }}>name</th>
                                <th style={{ border: '1px solid rgba(0, 0, 0)' }}>amount</th>
                            </tr>
                        </thead>
                        <StatisticLine text='good' amount={good} />
                        <StatisticLine text='neutral' amount={neutral} />
                        <StatisticLine text='bad' amount={bad} />
                        <StatisticLine text='all' amount={all} />
                        <StatisticLine text='average' amount={average} />
                        <StatisticLine text='positive' amount={positive + '%'} />
                    </table>
                </div>
            )}
        </div>
    );
}

const StatisticLine = ({ text, amount }) => {
    return (
        <tbody>
            <tr style={{ border: '1px solid rgba(0, 0, 0)' }}>
                <td style={{ border: '1px solid rgba(0, 0, 0)', textAlign: 'right' }}> {text} </td>
                <td style={{ border: '1px solid rgba(0, 0, 0)', textAlign: 'right' }}> {amount} </td>
            </tr>
        </tbody>
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
            <Button
                handleClick1={() => setGood(good + 1)} text1='good'
                handleClick2={() => setNeutral(neutral + 1)} text2='neutral'
                handleClick3={() => setBad(bad + 1)} text3='bad' />
            <Heading text='statistics' />
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                all={all}
                average={average}
                positive={positive}
            />
        </div>
    )
}

export default App