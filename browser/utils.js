export const makeGrid = () => {
  let array = [];
  for (let i = 0; i < 40; i++) {
    array.push(Array(40).fill(false))
  }
  return array;
}

export const makeRandomBoard = () => {
  return makeGrid().map(row => {
    return row.map(cell => {
      let num = Math.floor(Math.random() * 40);
      if (num % 5) {
        cell = false
      } else {
        cell = true;
      }
      return cell;
    })
  })
};

export const  createPattern = (pattern, alive) => {
  var startY = Math.floor((40 - pattern.length)/2);
  var startX = Math.floor((40 - pattern[0][0].length) / 2);
  var patternXCount = 0;
  var patternYCount = 0;

  for (let i = startY; i < startY + pattern.length; i++) {
    for (let j = startX; j < startX + pattern[0][0].length; j++) {
      if (pattern[patternYCount][0][patternXCount] !== '.') {
        alive(i, j)
      }
      patternXCount++;
    }
    patternXCount = 0;
    patternYCount++;
  }
}

export const startingPatterns = {
  acorn: [['.O.....'], ['...O...'], ['OO..OOO']],

  period: [['....OO......OO....'], ['...O.O......O.O...'], ['...O..........O...'], ['OO.O..........O.OO'], ['OO.O.O..OO..O.O.OO'], ['...O.O.O..O.O.O...'], ['...O.O.O..O.O.O...'], ['OO.O.O..OO..O.O.OO'], ['OO.O..........O.OO'], ['...O..........O...'], ['...O.O......O.O...'], ['....OO......OO....']],

  spaceship: [['...............O'], ['O.............OO'], ['O............OO.'], ['O.............OO'], ['...............O']],

  house: [['.OOO.'], ['O...O'], ['OO.OO']],

  killertoads: [['..OO.......OOO'], ['O....O....OOO.'], ['......O.......'], ['O.....O.......'], ['.OOOOOO.......'], ['..........OOO.'], ['...........OOO']],

  pulsar: [['..OOO...OOO..'], ['.............'], ['O....O.O....O'], ['O....O.O....O'],
  ['O....O.O....O'], ['..OOO...OOO..'], ['.............'], ['..OOO...OOO..'], ['O....O.O....O'], ['O....O.O....O'], ['O....O.O....O'], ['.............'], ['..OOO...OOO..']]
}
