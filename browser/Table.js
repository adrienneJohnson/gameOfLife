import React from 'react';
import TableCell from './TableCell';

const Table = (props) => {
	return (
		<table id="board">
			<tbody>
				{props.grid.map((row, rowIdx) =>
					<tr key={rowIdx} >
					{row.map((cell, colIdx) =>
						 <TableCell rowIdx={rowIdx} colIdx={colIdx} cell={cell} key={colIdx} />
					)}
					</tr>)}
			</tbody>
		</table>
	);
};

export default Table;
