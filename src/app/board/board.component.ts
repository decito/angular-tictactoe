import { Component } from '@angular/core';

interface Squares {
  values: 'X' | 'O' | null;
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent {
  squares: Squares['values'][];
  xIsNext: boolean;
  winner: string | null;
  withdraw: boolean;

  ngOnInit() {
    this.newGame();
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.withdraw = false;
    this.xIsNext = true;
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  makeMove(index: number) {
    if (this.winner || this.withdraw) {
      return
    }

    if (!this.squares[index]) {
      this.squares.splice(index, 1, this.player);
      this.xIsNext = !this.xIsNext;
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
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

      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }

    if (!this.squares.includes(null)) {
      this.withdraw = true;
    }

    return null;
  }
}
