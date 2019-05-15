import React, { useState } from 'react'
import ReactDOM from 'react-dom'



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
      
       Hyvä: {good} <br/>
        Neutraali: {neutral}<br/>
       Huono: {bad}<br/>
      Keskiarvo:{(good-bad)/(good+bad+neutral)}<br/>
      Positiivisia: {100*good/(good+bad+neutral)}%
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)