import React from 'react'


const course = 'Half Stack application development'
const parts = [
    {
        name: 'Fundamentals of React',
        exercises: 10
    },
    {
        name: 'Using props to pass data',
        exercises: 7
    },
    {
        name: 'State of a component',
        exercises: 14
    }
]

const Header = (props) => {
    return (
        <>
            <h1>{props.course}</h1>
        </>
    )
}

const Part = (props) => {
    return (
        <>
            <p>{props.name} {props.exercises}</p>
        </>
    )
}

const Content = () => {
    return (
        <>
            <Part name={parts[0].name} exercises={parts[0].exercises} />
            <Part name={parts[1].name} exercises={parts[1].exercises} />
            <Part name={parts[2].name} exercises={parts[2].exercises} />
        </>
    )
}

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.total}</p>
        </>
    )
}

const App = () => {

    return (
        <>
            <Header course={course} />
            <Content />
            <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
        </>
    )
}

export default App