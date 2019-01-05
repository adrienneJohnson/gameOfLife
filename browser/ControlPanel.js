import React from 'react'
import { startingPatterns } from './utils'

const ControlPanel = (props) => {
  let patterns = Object.keys(startingPatterns)

	return (
    <div>
      <div id='control_panel' className="buttons">

        <button type="button" id='play_btn' className='btn btn-primary'
        onClick={props.autoPlay} >Play</button>

        <button type="button" id='reset_btn' className='btn btn-primary' onClick={props.stopPlay} >Stop</button>

        <button type="button" id='step_btn' className='btn btn-primary' onClick={props.cellsAlive}>Step</button>

        <button type="button" id='clear_btn' className='btn btn-primary' onClick={() => {props.stopPlay();  props.clear() }} >Clear</button>

      </div>
      <div id="control_panel">
        <button type="button" id='pattern_btn' className='btn btn-info'>Try a starting pattern:
            <select style={{marginLeft: '10' +'px'}} onChange={(evt) => {props.choosePattern(evt.target.value)}}>
                <option>Choose one</option>
                {patterns.map((pattern, index) =>
                  <option key={index} value={pattern}>{pattern[0].toUpperCase()+pattern.slice(1)}</option>
                )}
              </select>
        </button>
      </div>
    </div>
	)
};

export default ControlPanel;
