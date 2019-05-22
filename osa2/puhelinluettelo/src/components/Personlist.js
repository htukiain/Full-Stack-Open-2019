import React from 'react'
import personService from '../services/persons'


const Personslist = (props) => {

    const startDelete = (event) => {
        console.log ("delete pressed",event.target.id)

        window.confirm("Are you sure to delete");
        personService
        .deletenumber(event.target.id)    
        .then(response => {console.log(response)    })
    

    }

    const persons=props.persons

    if (persons !== undefined) {
    const Persontoshow = persons.filter(person => person.name.toLowerCase().indexOf(props.filter.toLowerCase())===0 )

    return (
        <ul>
        {Persontoshow.map ((person) => 
        
              <li key={person.name}>
              {person.name} {person.number} 
              <button id={person.id} onClick={startDelete}> Poista</button></li>
        
        )
        }
  
        </ul>
    )
        }
    else {
        return (<div> No list yet </div>)
    }


}

export default Personslist