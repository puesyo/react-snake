import React, {useState} from 'react'
import { Board } from './board'

export const Game = () => {

    const squareArray = new Array(9).fill(null);
    const [squares, setSquares] = useState(squareArray);

    const [xIsNext, setxIsNext] = useState(true);

    let historyObject = [new Array(9).fill(null)];
    const [history, setHistory] = useState(historyObject); // the history object stores all the moves and the next player

    const historylist = history; // this variable is a copy of history
    let current = historylist[historylist.length -1]; // this variable is set to the last move played - was(historylist.length -1)

    let isXorO = xIsNext ? 'X' : 'O';
    const winner = calculateWinner(squares);
    let status = winner?'Winner: ' + winner : 'Next player ' + isXorO;

    // const moves = history.map((step, move) => { //setep: value, move: id
    //       const desc = move ? 'Go to move #' + move : 'Go to move start';
    //       return (
    //         //since the moves are never reordered, deleted or inserted in the middle it is safe to use the array index
    //         <li key={move}>
    //           <button onClick={() => jumpTo(move)}>{desc}</button>
    //         </li>
    //       );
    // });


    function handleClick(i) {

        //add moves to historylist (array of squares. Each square is an array of 9 values x or o)
        const square = squares.slice();
        const historylist = history;
        historylist.push(square);
        const current = historylist[historylist.length -1];
        //const steps = stepNumber + 1;
         
        
        //make a shallow copy of the square array. You can also use = squares.slice()
        //the rason behind making a copy has to do with the concept of mutation 
        //not mutating or changing data directly we gain several benefits like re-render determination 
        //const square = [...current.squares];

        //ignore a click if someone has won the game or if a square is already filled
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        square[i] = xIsNext ? 'X' : 'O' ;
        setSquares(current); // it was square before, now we implement current for the last move played
        setHistory( historylist);
        setxIsNext(!xIsNext);
        console.log(square);
        console.log(history, xIsNext);
        console.log(current);
      
    }

      function reset() {
        setHistory(historyObject);
        setSquares(squareArray);
        setHistory(historyObject);
        setxIsNext(true);
      }
    //function to jump to a previous step
    // function jumpTo(step) {
    //   if (!step) {
    //     setSquares(squareArray);
    //   }
    //   setStepNumber(step);
    //   current = historylist[stepNumber];
    //   setSquares(current); // it was square before, now we implement current for the last move played
    //     setHistory( historylist);
    //   //if the step is even set xIsNext to true
    //   setxIsNext((step % 2) === 0)
    // }

    //this function calculates the winner
    function calculateWinner(squares) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    return (
        <div className="container">
          <div><h1>Let&apos;s Play Tic-Tac-Toe</h1></div>
            
            <div className="game-board">
                <Board 
                value={current} //it contained squares only before ------- NOTE: TO USE CURRENT HERE I HAVE TO DECLARE CURENT AND HISTORYLIST IN AND OUTSIDE HANDLECLICK()
                onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <button className= "button" onClick={() => reset()}>Reset</button>
                {/* <ol>{moves}</ol> */}
            </div>
        </div>
    )
}
