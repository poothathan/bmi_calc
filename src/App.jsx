import { useState } from 'react'
import './App.css'

function App() {

  const [result, setResult] = useState("")

  function change(click){
    setResult(click);
  }

  let height;
  let weight;
  function check(){
    height = document.getElementById("fname").value;
    weight = document.getElementById("lname").value;
    if(height && weight){
      let value = (weight/(height*height))*10000;
      let answer = "YOUR BMI VALUE IS : "+value.toFixed(2);
      change(answer);
    }
    else{ 
      change("INVALID INPUT.");
    }
  }

  return (
    <div>
      <h2>BMI CALCULATOR</h2>
      <div className="card">
        <div>
          <label for="fname">ENTER YOUR HEIGHT</label>
          <input type="number" id="fname" name="fname"/><br/>
          <label for="lname">ENTER YOUR WEIGHT</label>
          <input type="number" id="lname" name="lname"/><br/><br/>
          <button onClick={() => {check()}}>SUBMIT</button>
        </div>
        <br/>
        <div className="head">
          <h5>{result}</h5>
        </div>
      </div>
    </div>
  )
}

export default App
