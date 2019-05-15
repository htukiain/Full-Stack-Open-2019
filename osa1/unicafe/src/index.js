import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistic = (props) => {
  return (
    <div>
    {props.name} : {props.value} <br/>
    </div>
  )
}

const Statistics = (props) => {

    let {good, bad, neutral}= props

    if (good+bad+neutral === 0) return (<div>Ei yhtään palautetta annettu</div>)

    return (<div>
            <Statistic name="hyvä" value={good}/>
            <Statistic name="neutraali" value={neutral} />
            <Statistic name ="huono" value = {bad}/>
            Keskiarvo:{(good-bad)/(good+bad+neutral)}<br/>
            Positiivisia: {100*good/(good+bad+neutral)}%
      </div>
)
}


const Button = (props) => {

  return (
    <button onClick={props.handleclick} type="button">{props.text}</button> 
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
        <Button handleclick={()=>setGood(good+1)} text="Hyvä"/> 
        <Button handleclick={()=>setNeutral(neutral+1)} text="Neutraali"/> 
        <Button handleclick={()=>setBad(bad+1)} text="Huono"/> 
        <h2>Statistiikka:</h2>
        <Statistics good={good} neutral={neutral} bad = {bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)