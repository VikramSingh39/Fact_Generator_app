import { useState } from 'react'
import './App.css'

function App() {
    const [fact, setFact] = useState({ text: "There are 10 human body parts that are only 3 letters long" });

    // Fetch Fact on calling API 
    async function loadFact() {
        try {
            const res = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
            const data = await res.json();
            setFact({text: data.text});
        } catch (error) {
            console.error("Failed to fetch fact:", error);
        }
    }

  return (
       <>
         <div className="container">
            <div className="quote">
                {fact.text}
            </div>
             <button onClick={loadFact}>Generate Next Fact</button>
         </div>
      </>
  )
}

export default App
