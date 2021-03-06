// tictactoe game
// 2 player buttle
// 9x9のマスがあり、３つの要素が直線上に並ぶとそのプレイヤーが勝利
// game startボタンを押すとゲームができる
// Go to moveボタンを押すと、前に打った場所からスタートができる

import React from "react";
import './TicTacToe.css';

// マス目を生成
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// マス目があるボードを生成
class Board extends React.Component {
  // Squareに値と、イベントを追加する
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div className="game-board">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// ゲームのルールやヒストリーなどを定義
export class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    // history: ゲームの記録
    // stepNumber: ゲームの手順
    // xIsNext: プレイヤーの手順
    this.state = {
      history: [{
        squares: Array(9).fill('◇'),
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  // ヒストリーが押された時の処理を定義
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // すでに勝利が確定している、マス目がすでに埋まっている場合
    if (calculateWinner(squares) || squares[i] !== '◇') {
      return;
    }
    // プレイヤーの表示
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // プレイヤーの手をhistoryにつなげていく
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  // 押されたヒストリーまで飛ぶ
  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + step.squares :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <Board
          squares={current.squares}
          onClick={i => this.handleClick(i)}
        />
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}


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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] &&
      ![squares[a], squares[b], squares[c]].includes('◇')) {
      return squares[a];
    }
  }
  return null;
}
