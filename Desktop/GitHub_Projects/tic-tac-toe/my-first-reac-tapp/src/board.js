import React, { useState} from 'react'
import { Square } from "./square";

export const Board = () => {
    
    
    const squareArray = [];
    const [squares, setSquares] = useState(squareArray);
    const [xIsNext, setxIsNext] = useState(true)
    let isXorO = xIsNext ? 'X' : 'O';
    //const status = 'Nex Player: ' + isXorO;
    const winner = calculateWinner(squares);
    
    let status = winner?'Winner: ' + winner : 'Next player ' + isXorO;

    function handleClick(i) {
        
        //make a shallow copy of the square array. You can also use = squares.slice()
        //the rason behind making a copy has to do with the concept of mutation 
        //not mutating or changing data directly we gain several benefits like re-render determination 
        const square = [...squares];
        //ignore a click if someone has won the game or if a square is already filled
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        square[i] = xIsNext ? 'X' : 'O' ;
        setSquares(square);
        setxIsNext(!xIsNext);
       console.log(square);
       
      
    }

    //This function will render a square component passing down two props
    function rendersquare(i) {
        return (
            <Square
                value={squares[i]}
                onClick={() => handleClick(i)}
            />
        );
    }

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
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {rendersquare(0)}
                {rendersquare(1)}
                {rendersquare(2)}

            </div>
            <div className="board-row">
                {rendersquare(3)}
                {rendersquare(4)}
                {rendersquare(5)}
            </div>
            <div className="board-row">
                {rendersquare(6)}
                {rendersquare(7)}
                {rendersquare(8)}
            </div>

        </div>
    )
}
