import ReactDOM from 'react-dom'
import React, { useState } from 'react'



const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number:'0400 - 212' }
  ]) 
  const [ newName, setNewName ] = useState('Anna nimi')
  const [ newNumber, setNewnumber ] = useState('Anna numero')

const addName = (event) => {
  event.preventDefault()    
 
  let duplikaatti = false
  
  persons.forEach(function(item, index) {
  if (item.name === newName) {
    setNewName('')
    duplikaatti = true
    //console.log(duplikaatti)
    alert (`${newName} on jo olemassa`)

  }
  });


 // console.log("superalku",duplikaatti)
  if (!duplikaatti){
    //console.log ("alussa", newName)
    const nameObject = {
          name: newName,
          number: newNumber
        }
   
  setPersons(persons.concat(nameObject))
  setNewName('')
    }
}

const handleNamechange = (event) => {   
   //console.log(event.target.value)    
   setNewName(event.target.value)  
}


const handleNumberchange = (event) => {   
  //console.log(event.target.value)    
  setNewnumber(event.target.value)  
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
          numero: <input value={newNumber}
          onChange= {handleNumberchange}
        />

        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
      <ul>
      {persons.map (person =><li key={person.name}>{person.name} {person.number} </li>)}
      </ul>
    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))