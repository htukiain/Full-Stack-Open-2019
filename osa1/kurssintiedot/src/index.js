import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}


const Content = (props) => {
    return (
        <div>
    <Part name = {props.part1} nro = {props.nro1}/> 
    <Part name = {props.part2} nro = {props.nro2}/> 
    <Part name = {props.part3} nro = {props.nro3}/> 
    </div>
    )
}


const Part = (props) => {
    return (
        <p>{props.name} {props.nro}</p>
    )
}

const Total = (props) => {
    return (
        <p> Yhteensä {props.nro1 + props.nro2 + props.nro3} tehtävää</p> 
    )
}

const App = () => {
    const course = 'Half Stack -sovelluskehitys'
    const part1 = {
      name: 'Reactin perusteet',
      exercises: 10
    }
    const part2 = {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    }
    const part3 = {
      name: 'Komponenttien tila',
      exercises: 14
    }

  return (
    <div>
      <Header course={course}/> 
        <Content part1={part1.name} nro1={part1.exercises} part2={part2.name} nro2={part2.exercises} part3={part3.name} nro3={part3.exercises} />
      <Total nro1={part1.exercises} nro2={part2.exercises} nro3={part3.exercises}  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))