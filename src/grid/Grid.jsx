import React, { useState } from "react";
import Card from "../components/Card";
import "./Grid.css";
import isWinner from "../helper/checkWinner";
import Confetti from "react-confetti";
// import { useWindowSize } from "react-use";
function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  // const { width, height } = useWindowSize();
  function play(index) {
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }
    const win = isWinner(board, turn ? "O" : "X");
    if (win) {
      setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }
  function resetBoard() {
    setTurn(true);
    setWinner(null);
    setBoard(Array(numberOfCards).fill(""));
  }
  return (
    <div className="grid-wrapper">
      <h1 className="turn-highlight">Current Turn: {turn ? "O" : "X"}</h1>
      <div className="grid">
        {board.map((el, id) => (
          <Card
            gameEnd={winner ? true : false}
            key={id}
            onPlay={play}
            player={el}
            index={id}
          />
        ))}
      </div>

      {winner && (
        <>
          <h1 className="turn-highlight">Winner is {winner}</h1>
          <Confetti width={1500} height={600} />

          <button className="reset" onClick={resetBoard}>
            Reset Game
          </button>
        </>
      )}
    </div>
  );
}

export default Grid;
