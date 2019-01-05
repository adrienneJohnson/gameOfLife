import { createStore } from 'redux'
import { makeGrid, makeRandomBoard } from './utils.js'

const initialState = {
  grid: makeGrid(),
  nextGrid: makeGrid()
};

const TOGGLE_CELL = 'TOGGLE_CELL';
const MAKE_LIVE = 'MAKE_LIVE';
const MAKE_DEAD = 'MAKE_DEAD';
const ADVANCE = 'ADVANCE';
const CLEAR = 'CLEAR';
const MAKE_RANDOM = 'MAKE_RANDOM'
const SHIFT = 'SHIFT'

export const switcher = (row, col) => ({
  type: TOGGLE_CELL, row, col
})

export const alive = (row, col) => ({
  type: MAKE_LIVE, row, col
})

export const dead = (row, col) => ({
  type: MAKE_DEAD, row, col
})

export const advance = () => ({
  type: ADVANCE
})

export const clear = () => ({
  type: CLEAR
})

export const random = () => ({
  type: MAKE_RANDOM
})

export const shiftBoard = () => ({
  type: SHIFT
})

const reducer = (state = initialState, action) => {
  let newGrid = state.grid.slice();
  let nextGridCopy = state.nextGrid.slice();
  switch (action.type) {
    case TOGGLE_CELL:
      newGrid[action.row][action.col] = !newGrid[action.row][action.col];
      return { ...state, grid: newGrid };
    case MAKE_LIVE:
      nextGridCopy[action.row][action.col] = true;
      return { ...state, nextGrid: nextGridCopy };
    case MAKE_DEAD:
      nextGridCopy[action.row][action.col] = false;
      return { ...state, nextGrid: nextGridCopy };
    case ADVANCE:
      return { grid: state.nextGrid, nextGrid: makeGrid() }
    case CLEAR:
      return { grid: makeGrid(), nextGrid: makeGrid() }
    case MAKE_RANDOM:
      return { grid: makeRandomBoard(), nextGrid: makeGrid() }
    case SHIFT:
      let oneLess = nextGridCopy.map(row => row.filter((cell, index) => index !== 19 ))
      let oneLessShifted = oneLess.map(row => { row.unshift(false); return row });
      return { ...state, nextGrid: oneLessShifted }
    default:
      return state;
  }
}

export default createStore(reducer)
