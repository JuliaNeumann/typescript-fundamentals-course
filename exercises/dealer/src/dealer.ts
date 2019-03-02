/**
 * Shuffle an array in place
 * @param a Array to shuffle
 */
function shuffleArray(a: any[]) {
  // Iterate over the array
  for (let i = a.length; i; i--) {
    // Get next index
    let j = Math.floor(Math.random() * i);
    // Swap positions
    [a[i - 1], a[j]] = [a[j], a[i - 1]];
  }
}

export enum Suit {
  Clubs, Diamonds, Hearts, Spades
}

export enum CardNumber {
  Ace, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, Jack, Queen, King
}

export type Card = [Suit, CardNumber];

export class Dealer {
  deck: Card[] = [];

  constructor() {
    for (let i = 0; i < Object.keys(Suit).length / 2; i++) {
        for (let j = 0; j < Object.keys(CardNumber).length / 2; j++) {
          this.deck.push([i, j]);
        }
    }
    shuffleArray(this.deck);
  }

  dealHand(num: number): Card[] {
    if (num > this.getLength() || num < 0) {
      throw new Error();
    }
    return this.deck.splice(0, num);
  }

  getLength(): number {
    return this.deck.length;
  }

  readCard(card: Card): string {
    return `${CardNumber[card[1]]} of ${Suit[card[0]]}`;
  }
}
