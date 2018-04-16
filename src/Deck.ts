
export namespace Deck{

  let suites = ["Spade", "Heart", "Club", "Diamond"]
  let cards = [
    {value: 1, name:"Ace", abbreviation:"A"},
    {value: 2, name:"Two", abbreviation:"2"},
    {value: 3, name:"Three", abbreviation:"3"},
    {value: 4, name:"Four", abbreviation:"4"},
    {value: 5, name:"Five", abbreviation:"5"},
    {value: 6, name:"Six", abbreviation:"6"},
    {value: 7, name:"Seven", abbreviation:"7"},
    {value: 8, name:"Eight", abbreviation:"8"},
    {value: 9, name:"Nine", abbreviation:"9"},
    {value: 10, name:"Ten", abbreviation:"10"},
    {value: 10, name:"Jack", abbreviation:"J"},
    {value: 10, name:"Queen", abbreviation:"Q"},
    {value: 10, name:"King", abbreviation:"K"},
  ]

  export function Create(){
    let deck = [];

    for(let suite of suites){
      for(let card of cards){
        deck.push({
          suite: suite,
          name: card.name,
          abbreviation: card.abbreviation,
          value: card.value
        })
      }
    }
    return deck;
  }

  export function Shuffle(deck, shuffleDepth:number){
    console.log(`Shuffle ${deck.length} ${shuffleDepth}`);
    //split Deck
    let splitPoint = Math.floor(deck.length * 0.5 + ( (deck.length * 0.2 * Math.random()) - (deck.length * 0.1) ) );
    let h1 = deck.slice(0, splitPoint);
    let h2 = deck.slice(splitPoint);
    //shuffle back together
    let shuffle = [];

    while(h2.length > 0 && h1.length > 0){
      if(Math.random() > 0.5 && h2.length > 0){
        shuffle.push(h2.pop());
      }else if(h1.length > 0){
        shuffle.push(h1.pop());
      }
    }

    shuffle = shuffle.concat(h1, h2);

    if(shuffleDepth > 1){
      shuffle = Shuffle(shuffle, shuffleDepth-1);
    }
    return shuffle;
  }
}
