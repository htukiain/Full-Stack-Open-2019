import React from 'react'

const Personslist = (props) => {

    const persons=props.persons

    if (persons !== undefined) {
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
    else {
        return (<div> No list yet </div>)
    }


}

export default Personslist