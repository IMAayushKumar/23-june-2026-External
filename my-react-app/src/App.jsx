import { useState } from 'react'
import './App.css'

function App() {
  const [dob, setDob] = useState('')
  const [totalAge, setTotalAge] = useState('')
  const [details, setDetails] = useState('')

  function findAge() {
    if (!dob) {
      alert('Please select a date')
      return
    }
    const birthDate = new Date(dob)
    const today = new Date()
    
    const years = today.getFullYear() - birthDate.getFullYear()
    const months = today.getMonth() - birthDate.getMonth()
    const days = today.getDate() - birthDate.getDate()
    
    setTotalAge(`Age: ${years}`)
    setDetails(`${years} Years, ${months} Months, ${days} Days`)
  }

  return (
    <div className="container">
      <h1>Age Finder</h1>
      <input 
        type="date" 
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={findAge}>Find Age</button>
      <h2>{totalAge}</h2>
      <p>{details}</p>
    </div>
  )
}

export default App