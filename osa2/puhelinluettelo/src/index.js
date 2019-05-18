import ReactDOM from 'react-dom'
import React, { useState } from 'react'



const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

const addName = (event) => {
  event.preventDefault()    
  const nameObject = {
    name: newName
  }

  setPersons(persons.concat(nameObject))
  setNewName('')
}

const handleNamechange = (event) => {   
   console.log(event.target.value)    
   setNewName(event.target.value)  
}

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addName}>
        <div>
          nimi: <input value={newName}
          onChange={handleNamechange}
          />
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <ul>
      {persons.map (person =><li key={person.name}>{person.name} </li>)}
      </ul>
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))