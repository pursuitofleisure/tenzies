import { useState } from 'react';
import './App.css';
import Die from './components/Die';

function App() {
  const [dice, setDice] = useState(createDieArray());

  /* Determine game win - if every die is held and is the same value */
  const gameWon =
    dice.every((die) => die.isHeld) &&
    dice.every((die) => (die.value = dice[0].value));

  /* Function to create random die numbers */
  function randomDie() {
    return Math.ceil(Math.random() * 6);
  }

  /* Initial function to create first dice */
  function createDieArray() {
    return new Array(10).fill(0).map(() => ({
      id: Math.random(),
      value: randomDie(),
      isHeld: false,
    }));
  }

  /* Allow users to roll dice */
  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld === true ? die : { ...die, value: randomDie() };
      })
    );
  }

  /* Allow users to select die to prevent reroll */
  function holdDie(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  /* Create dice elements */
  const dieElements = dice.map((die) => (
    <Die
      key={die.id}
      id={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDie={holdDie}
    />
  ));

  return (
    <main>
      <div className="tenzies-description">
        <h1>Tenzies</h1>
        <p>
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <div className="die-container">{dieElements}</div>
      <button onClick={rollDice} className="roll-btn">
        {gameWon ? 'New Game' : 'Roll'}
      </button>
    </main>
  );
}

export default App;
