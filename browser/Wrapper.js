import React from 'react';
import Table from './Table'
import { connect } from 'react-redux'
import { alive, dead, advance, clear, random, shiftBoard } from './store'
import ControlPanel from './ControlPanel'
import Footer from './Footer.js'
import { startingPatterns, createPattern } from './utils'

class Wrapper extends React.Component {
  constructor() {
    super()
    this.interval = null;
    this.on = false;
    this.cellsAlive = this.cellsAlive.bind(this)
    this.getNeighbors = this.getNeighbors.bind(this)
    this.autoPlay = this.autoPlay.bind(this)
    this.stopPlay = this.stopPlay.bind(this)
    this.generatePattern = this.generatePattern.bind(this);
    this.fixedPattern = this.fixedPattern.bind(this)
  }

  autoPlay() {
    if (this.interval === null) {
      this.interval = setInterval(this.cellsAlive, 100)
    }
  }

  stopPlay() {
    this.interval = clearInterval(this.interval);
    this.interval = null;
  }

  cellsAlive() {
    this.props.grid.forEach((row, rowIdx) =>
      row.forEach((cell, colIdx) => {
        let neighbors = this.getNeighbors(rowIdx, colIdx)

		    let tally = 0;
		    neighbors.forEach(arr => {
			    if (this.props.grid[arr[0]][arr[1]]) {
				    tally += 1;
			    }
        })

        if (this.props.grid[rowIdx][colIdx] === true) {
          tally === 2 || tally === 3 ? this.props.alive(rowIdx, colIdx) : this.props.dead(rowIdx, colIdx)
        } else {
          tally === 3 ? this.props.alive(rowIdx, colIdx) : this.props.dead(rowIdx, colIdx)
        }
    }))
    this.props.advance();
	}

	getNeighbors(row, col) {
		let neighbors = [];
			for (let i = row - 1; i <= row + 1; i++) {
				for (let j = col - 1; j <= col + 1; j++) {
					if (i >= 0 && j >= 0 && i < 40 && j < 40) {
						if (`${i}${j}` !== `${row}${col}`) {
						neighbors.push([i, j]);
						}
					}
				}
			}
		return neighbors;
  }

  generatePattern(chosenPattern) {
    this.stopPlay();
    this.props.clear();

    if (chosenPattern === 'random') {
      this.props.randomize();
    } else {
      var pattern = startingPatterns[chosenPattern];
      this.fixedPattern(pattern);
    }
  }

  fixedPattern(pattern) {
    createPattern(pattern, this.props.alive);
    this.props.advance();
  }

  render() {
    return (
      <div>
        <h2>Game of Life</h2>
        <Table grid={this.props.grid} />
        <ControlPanel cellsAlive={this.cellsAlive} getNeighbors={this.getNeighbors} autoPlay={this.autoPlay} clear={this.props.clear} stopPlay={this.stopPlay} randomize={this.props.randomize} interval={this.interval} choosePattern={this.generatePattern} setPattern={this.fixedPattern} on={this.on} toggle={this.toggleButton} />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  grid: state.grid
})

const mapDispatchToProps = (dispatch) => ({
  dead: (row, col) => dispatch(dead(row, col)),
  alive: (row, col) => dispatch(alive(row, col)),
  clear: () => dispatch(clear()),
  advance: () => dispatch(advance()),
  randomize: () => dispatch(random()),
  shift: () => dispatch(shiftBoard()),
  toggle: (row, col) => dispatch(switcher(row, col))
})

export default connect(mapStateToProps, mapDispatchToProps)(Wrapper)
