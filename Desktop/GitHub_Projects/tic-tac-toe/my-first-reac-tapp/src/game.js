import React from 'react'
import { Board } from './board'

export const Game = () => {
    return (
        <div className="game">
            <div className="game-board">
                <Board></Board>
            </div>
            <div className="game-info">
                <div></div>
                <ol></ol>
            </div>
        </div>
    )
}
