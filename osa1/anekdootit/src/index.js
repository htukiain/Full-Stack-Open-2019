import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const App = (props) => {
  const [selected, setSelected] = useState(0)

  var initialarray = Array(6).fill(0)
  const [votes, setVote] = useState(initialarray)

  const Vote =() => {

    const copy = [...votes]
    copy[selected]=copy[selected]+1
    setVote(copy)
    console.log("clicked",votes)
  
  }

  const Biggestvote = () => {
    const copy = [...votes]
    
    return (
      <div>
     <p>{anecdotes[copy.indexOf(Math.max.apply(Math,copy))]} <br/>
      has {Math.max.apply(Math,copy)} votes.</p>
      </div>
    )
    
  }

  return (
    <div>
      <h1>Anecdote of the day </h1>
      <p> {anecdotes[selected]} <br/>
       has {votes[selected]} votes </p>
      <button onClick={()=>setSelected( Math.floor(Math.random() *6))} type="button">Next anecdote</button> 
      <button onClick={()=>Vote(selected)} type="button">Vote</button> 
      <h1>Anecdote with most votes</h1>
      <Biggestvote/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)