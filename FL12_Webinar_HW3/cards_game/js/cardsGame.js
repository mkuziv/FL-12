const suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const rank = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
    this.isFacedCard = this.rank[0] || this.rank[10] || this.rank[11] || this.rank[12]?true: false;
  }

  _toString() {
    return `${this.rank} of ${this.suit}`
  }

  static compare(cardOne, cardTwo) {  
    if (cardOne.rank === rank[0]) {
      return true;
    } else if (cardTwo.rank === rank[0]) {
      return false;
    } 
    else if (rank.indexOf(cardOne.rank) > rank.indexOf(cardTwo.rank)) {
      return true;
    } else if((rank.indexOf(cardOne.rank) < rank.indexOf(cardTwo.rank))) {
      return false;
    } else {
      return 'draw'
    }
    
  }
}


class Deck {
  constructor() {
    this.deck = [];
    this.count = 52;
  }

  generateDeck(suit, rank) {
    for (let suits in suit) {
      for (let ranks in rank) {
        this.deck.push(new Card(suit[suits], rank[ranks]));
      }
    }
    return this.deck;
  }
  shuffle() {
    let fullDeck = this.deck.length, temp, i;
    while(fullDeck) {
      i = Math.floor(Math.random() * fullDeck--);
      temp = this.deck[fullDeck];
      this.deck[fullDeck] = this.deck[i]
      this.deck[i] = temp;
    }
    return this.deck;
  }
  draw(n) { 
    let chosenCard = [];
    for (let i = n; i > 0; i--) {
      chosenCard.push(this.deck.pop());
      this.count--; 
    }
    return chosenCard;
  }
}

class Player {
  constructor(name, wins, deck){
    this.name = name;
    this.wins = wins;
    this.deck = deck
  }
  
  static Play(PlayerOne, PlayerTwo) {
    PlayerOne.deck.generateDeck(suit, rank);
    PlayerOne.deck.shuffle();
    PlayerTwo.deck.generateDeck(suit, rank);
    PlayerTwo.deck.shuffle();
    for (let i = PlayerOne.deck.count - 1; i >= 0; i--) {
      if (Card.compare(PlayerOne.deck.deck[i], PlayerTwo.deck.deck[i]) === 'draw') {
        continue;        
      } else if (Card.compare(PlayerOne.deck.deck[i], PlayerTwo.deck.deck[i])){
        PlayerOne.wins++
      } else {
        PlayerTwo.wins++
      }
      console.log(PlayerOne.deck.deck[i]._toString());
      console.log(PlayerTwo.deck.deck[i]._toString());
      PlayerOne.deck.draw(1);
      PlayerTwo.deck.draw(1);
      console.log('1', PlayerOne.wins);
      console.log('2', PlayerTwo.wins);
    }
    if (PlayerOne.wins > PlayerTwo.wins){
      console.log(`${PlayerOne.name} wins ${PlayerOne.wins} to ${PlayerTwo.wins}`);
    } else {
      console.log(`${PlayerTwo.name} wins ${PlayerOne.wins} to ${PlayerTwo.wins}`);
    }
  }
}


let deck1 = new Deck();
let deck2 = new Deck();

let player1 = new Player('Jhon', 0, deck1)
let player2 = new Player('Pete', 0, deck2)

Player.Play(player1, player2);

