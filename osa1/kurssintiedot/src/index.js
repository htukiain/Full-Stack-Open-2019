import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}


const Content = (props) => {
    return (
        <p>
    <Part name = {props.part1} nro = {props.nro1}/> 
    <Part name = {props.part2} nro = {props.nro2}/> 
    <Part name = {props.part3} nro = {props.nro3}/> 
    </p>
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
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/> 
        <Content part1={part1} nro1={exercises1} part2={part2} nro2={exercises2}part3={part3} nro3={exercises3} />
      <Total nro1={exercises1} nro2={exercises2} nro3={exercises3}  />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))