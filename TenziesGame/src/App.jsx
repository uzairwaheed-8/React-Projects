/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(true)
    const [count,setCount] = React.useState(0)

    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue ) {
            setTenzies(true)
            setRecord()
        }
    }, [dice])

    
    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function rollDice() {
        if(!tenzies) { // timer running 
            
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
            setCount(count+1)
        } else {
            //timer stop
            setTenzies(false)
            setDice(allNewDice())
            setCount(0)
            reset();
        }
    }
    
    React.useEffect(() => {
        if(!tenzies){
          setIsRunning(true)
        }
        else{
          setIsRunning(false)
        }
    },[tenzies])


    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
       
    // Method to spot when game not running 
    const start=()=>{
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
      if (allHeld && allSameValue) {
         return true;
         
      }
      return false;
      }

    //--------------------------timer-------------------------------------------------- 

    const [time, setTime] = React.useState(0);
    // state to check stopwatch running or not
    const [isRunning, setIsRunning] = React.useState(false);
    React.useEffect(() => {
        let intervalId;
        if (isRunning) {
            // setting time from 0 to 1 every 10 milisecond using javascript setInterval method
            intervalId = setInterval(() => setTime(time + 1), 10);
          }
          return () => clearInterval(intervalId);
        }, [isRunning, time]);

        function timeCalc(time){
            const hours = Math.floor(time / 360000);
            const minutes = Math.floor((time % 360000) / 6000); 
            const seconds = Math.floor((time % 6000) / 100);
            const milliseconds = time % 100;
            return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`
        }

    
    // Method to reset timer back to 0
        const reset = () => {
          setTime(0);
    }
    //--------------------------High Score--------------------------------------------------
    const [bestTime, setBestTime] = React.useState(
        JSON.parse(localStorage.getItem("bestTime")) || 0
      );
      const [bestRolls, setBestRolls] = React.useState(
        JSON.parse(localStorage.getItem("bestRolls")) || 0
      );
    function setRecord(){
        if (!bestRolls || count < bestRolls) {
            setBestRolls(count);
          }

        if (!bestTime || time < bestTime) {
                setBestTime(time);
        }
    }
    React.useEffect(() => {
        localStorage.setItem("bestRolls", JSON.stringify(bestRolls));
      }, [bestRolls]);
    
      // Set bestTime to localStorage every item bestTime changes
      React.useEffect(() => {
        localStorage.setItem("bestTime", JSON.stringify(bestTime));
      }, [bestTime]);
    
    
    return (
        <main>
            {start() && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <div>
                {start() ? <h1> You Won ! </h1> : <h3 className="instructions">Roll until all dice are the same. 
                    Click each die to freeze it at its current value between rolls.</h3> }
            </div>
            <div className="dice-container">
                {diceElements}
            </div>
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
            <div className="score"> 
            <p>No. of Rolls : {count}</p>
            <p> Time Elapsed : 
            {timeCalc(time)} </p>
            </div>
            
     
      <div className="highScore">
        <h2>HighScore</h2>
        <div className="score">
        <p>Best Time : {timeCalc(bestTime)}</p>
        <p>Best Rolls : {bestRolls}</p>
        </div>
       
        </div>
        </main>
    )
}