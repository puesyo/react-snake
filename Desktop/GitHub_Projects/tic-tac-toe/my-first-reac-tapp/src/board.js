import React, { useState} from 'react'
import { Square } from "./square";

export const Board = () => {
    const status = 'New Player: X';
    const squareArray = [];
    const [squares, setSquares] = useState(squareArray);

    function handleClick(i) {
        const square = squares;
        square[i] = 'X';
        setSquares(square);
       console.log(squares[i]);
      
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
