import React from 'react'
import ReactDOM from 'react-dom'


const Course = (props) => {

    return (
      <div>
      <Header name ={props.course.name} />
      <Content courses= {props.course.parts}/>
      <Footer courses = {props.course.parts} />
      </div>
    )
}

const Header = (props) => {
  return (
      <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return (

    props.courses.map (part  =>
      <Part key={part.id}
      name={part.name} 
      exercises={part.exercises}
      />)

  )



}
 
const Part = (props) => {
  return ( <div>{props.name} {props.exercises}</div>)
 
}

const Footer = (props) => {

  const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises;
  
  return (

    <div> Yhteensä  {props.courses.reduce(reducer,0)} tehtävää </div>

  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack -sovelluskehitys',
      id: 1,
      parts: [
        {
          name: 'Reactin perusteet',
          exercises: 10,
          id: 1
        },
        {
          name: 'Tiedonvälitys propseilla',
          exercises: 7,
          id: 2
        },
        {
          name: 'Komponenttien tila',
          exercises: 14,
          id: 3
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewaret',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
     { courses.map( item => <Course course={item} /> )}
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))