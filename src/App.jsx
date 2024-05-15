import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
const [count, setCount] = useState(1);

const [txt, setTxt] = useState("All");
 
  return (
    <>
      <div className="card">
        
          
          <button style={{
            color : "blueviolet" 
          }}   onClick={()=> {
            setCount(count+1);
           
            }}>+</button>
<h1>Count is {count}</h1>
<button style={{
            color : "blueviolet" 
          }}   onClick={()=> {
            setCount(count-1);
            
            }}>-</button>

<button style={{
            color : "blueviolet" 
          }}   onClick={()=> {
            setCount(count+1);
           
            }}> you have clicked {count} th time</button>
      
      
      <button style={{
            color : "blueviolet" 
          }}   onClick={()=> {
            setTxt("Music");
           
            }}> {txt}</button>
      </div>


    </>
  )
}

export default App
