import React from 'react'

const Personform = (props) => {

    return (

        <form onSubmit={props.onSubmit_1}>
            <div>
                nimi: <input value={props.value_1}
                onChange={props.onChange_1}
                />
            </div>
            <div>
                numero: <input value={props.value_2}
                onChange= {props.onChange_2}
                />
            </div>
            <div>
                 <button type="submit">lisää</button>
            </div>
        </form>


    )
}

export default Personform