import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {

    let {good, bad, neutral}= props

    if (good+bad+neutral === 0) return (<div>Ei yhtään palautetta annettu</div>)

    return (<div>
            Hyvä: {good} <br/>
            Neutraali: {neutral}<br/>
            Huono: {bad}<br/>
            Keskiarvo:{(good-bad)/(good+bad+neutral)}<br/>
            Positiivisia: {100*good/(good+bad+neutral)}%
      </div>
)
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <h1>Anna Palautetta:</h1>
       <button onClick={()=>setGood(good+1)} type="button">Hyvä</button> 
       <button onClick={()=>setNeutral(neutral+1)} type="button">Neutraali</button> 
       <button onClick={()=>setBad(bad+1)} type="button">Huono</button> 
      <h2>Statistiikka:</h2>
 

            <Statistics good={good} neutral={neutral} bad = {bad}/>


    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)