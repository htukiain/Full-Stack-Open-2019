import React from 'react'

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

export default Course