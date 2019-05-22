import ReactDOM from 'react-dom'
import React, { useState, useEffect  } from 'react'
import Filter from './components/Filter'
import Personform from './components/Personform'
import Personlist from './components/Personlist'
import personService from './services/persons'




const App = () => {
  const [ persons, setPersons] = useState() 
  const [ newName, setNewName ] = useState('Anna nimi')
  const [ newNumber, setNewnumber ] = useState('Anna numero')
  const [ newFilter, setNewfilter ] = useState('')

  const startDelete = (event) => {
    console.log ("delete pressed",event.target.id)
    let poistettavaid= event.target.id
    let nimi = persons.filter (person => person.id === event.target.id)
    console.log (nimi)

    window.confirm(`Are you sure to delete ${nimi}`);
    personService
    .deletenumber(event.target.id)
    .then( setPersons(persons.filter(person => person.id !== poistettavaid )) ) 

    


}


  useEffect(() => {
    personService
    .getAll()
    .then(response => {setPersons(response)})  }, [])
  

const addName = (event) => {
  event.preventDefault()    
 
  let duplikaatti = false
  
  persons.forEach(function(item, index) {
  if (item.name === newName) {
    setNewName('')
    setNewnumber('')
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
   
    personService
      .create(nameObject)    
      .then(response => { setPersons(persons.concat(response))   
      setNewName('')
    })
    
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

const handleFilterchange = (event) => {   
  //console.log(event.target.value)    
  setNewfilter(event.target.value)  
}




  return (
    <div>
      <h1>Puhelinluettelo</h1>

      <Filter 
          value={newFilter}
          onChange={handleFilterchange}
        />
    
      <h2>Lisää uusi</h2>
      
      <Personform 
        onSubmit_1={addName}
        value_1={newName}
        onChange_1={handleNamechange}
        value_2={newNumber}
        onChange_2= {handleNumberchange}
        />
      

      <h2>Numerot</h2>

      <Personlist 
        persons={persons} 
        filter={newFilter}
        call ={startDelete}
        />

    </div>
  )

}


ReactDOM.render(<App />, document.getElementById('root'))