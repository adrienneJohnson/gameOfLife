import React, { Component } from 'react';
import store, { switcher } from './store'

export default class TableCell extends Component {
	constructor() {
		super();
		this.onCellClick = this.onCellClick.bind(this)
	}

	onCellClick() {
		store.dispatch(switcher(this.props.rowIdx, this.props.colIdx))
	}

	render() {
		return <td className={this.props.cell === false ? 'dead' : 'alive'} onClick={this.onCellClick} />;
	}
}

