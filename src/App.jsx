import { useState } from 'react';
import './App.css';
import Die from './components/Die';

function App() {
  const [dieRolls, setDieRolls] = useState(createDieArray());

  function createDieArray() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        id: Math.random(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
      }));
  }

  function rollDice() {
    setDieRolls(createDieArray());
  }

  const dieElements = dieRolls.map((die) => (
    <Die key={die.id} value={die.value} />
  ));

  return (
    <main>
      <div className="die-container">{dieElements}</div>
      <button onClick={rollDice} className="roll-btn">
        Roll
      </button>
    </main>
  );
}

export default App;
