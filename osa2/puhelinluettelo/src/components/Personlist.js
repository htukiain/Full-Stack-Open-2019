import React from 'react'

const Personslist = (props) => {

    const persons=props.persons

    const Persontoshow = persons.filter(person => person.name.toLowerCase().indexOf(props.filter.toLowerCase())===0 )


    return (
        <ul>
        {Persontoshow.map ((person) => 
        
              <li key={person.name}>{person.name} {person.number}</li>
        
        )
        }
  
        </ul>
    )
}

export default Personslist