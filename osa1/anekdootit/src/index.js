import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Vote =(props) => {

    setVote([
        ...votes,
        {
          id: props.id,
          value: value+1
        }
      ])

}

const addItem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.random() * 100
      }
    ]);

const App = (props) => {
  const [selected, setSelected] = useState(0)

  var initialarray = Array(6).fill(0)
  const [votes, setVote] = useState(initialarray)


  return (
    <div>
        {console.log (Math.floor(selected))}
      <p> {anecdotes[selected]} </p>
      <button onClick={()=>setSelected( Math.floor(Math.random() *6))} type="button">Next anecdote</button> 
      <button onClick={()=>setVote(selected, )} type="button">Vote</button> 
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