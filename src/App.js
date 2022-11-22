import React, { useEffect, useState } from 'react';
import './App.css';
import { increaseRx, decreaseRx, calcBlank, displayBlankSizeResult, calcThickness, displayLensResult } from './Utils.js';
function App() {

  const [sph_r, SetSph_R] = useState('0.00');
  const [cyl_r, SetCyl_R] = useState('0.00');
  const [axis_r, SetAxis_R] = useState('0');
  const [pd_r, SetPd_R] = useState('32.0');

  const [sph_l, SetSph_L] = useState('0.00');
  const [cyl_l, SetCyl_L] = useState('0.00');
  const [axis_l, SetAxis_L] = useState('0');
  const [pd_l, SetPd_L] = useState('32.0');

  const [frameSize, SetFrameSize] = useState('54');
  const [dbl, SetDbl] = useState('18');
  const [ed, SetEd] = useState('55');
  const [frameType, setFrameType] = useState('Metal');


  const blankSizeR = calcBlank(pd_r, frameSize, dbl, ed);
  const blankSizeL = calcBlank(pd_l, frameSize, dbl, ed);
  const resultsRight = calcThickness(frameType, sph_r, cyl_r, axis_r, blankSizeR);
  const resultsLeft = calcThickness(frameType, sph_l, cyl_l, axis_l, blankSizeL);

  //Html elements
  return (
    <div className="App">
      <div className='Title'>
        <h1>Lens Thickness Calculator</h1>
      </div>
      <div className='Container'>
        {
          //Prescription 
        }
        <div className='Subcontainer'>
          <div className='Heading'>Prescription</div>
          <div className='RxInputs'>
            <p className='Eye'>Right:</p>
            <label className='Label'>Sph:</label>
            <button onClick={() => { SetSph_R(decreaseRx(sph_r, 0.25, 2)) }}>-</button>
            <input  onChange={(e) => SetSph_R(e.target.value)} className='input' value={sph_r} />
            <button onClick={() => { SetSph_R(increaseRx(sph_r, 0.25, 2)) }}>+</button>
            <label className='Label'>Cyl:</label>
            <button onClick={() => { SetCyl_R(decreaseRx(cyl_r, 0.25, 2)) }} >-</button>
            <input  onChange={(e) => SetCyl_R(e.target.value)} className='input' value={cyl_r} />
            <button onClick={() => { SetCyl_R(increaseRx(cyl_r, 0.25, 2)) }}>+</button>
            <label className='Label'>Axis:</label>
            <button onClick={() => { SetAxis_R(decreaseRx(axis_r, 5.00, 0, 0, 180)) }}>-</button>
            <input onChange={(e) => SetAxis_R(e.target.value)} className='input' value={axis_r} />
            <button onClick={() => { SetAxis_R(increaseRx(axis_r, 5.00, 0, 0, 180)) }}>+</button>
            <label className='Label'>PD:</label>
            <button onClick={() => { SetPd_R(decreaseRx(pd_r, 0.50, 1, 25, 40)) }}>-</button>
            <input onChange={(e) => SetPd_R(e.target.value)} className='input' value={pd_r} />
            <button onClick={() => { SetPd_R(increaseRx(pd_r, 0.50, 1, 25, 40)) }}>+</button>
          </div>
          <div className='RxInputs'>
            <p className='Eye'>&nbsp; Left:</p>
            <label className='Label'>Sph:</label>
            <button onClick={() => { SetSph_L(decreaseRx(sph_l, 0.25, 2)) }}>-</button>
            <input onChange={(e) => SetSph_L(e.target.value)} className='input' value={sph_l} />
            <button onClick={() => { SetSph_L(increaseRx(sph_l, 0.25, 2)) }}>+</button>
            <label className='Label'>Cyl:</label>
            <button onClick={() => { SetCyl_L(decreaseRx(cyl_l, 0.25, 2)) }}>-</button>
            <input onChange={(e) => SetCyl_L(e.target.value)} className='input' value={cyl_l} />
            <button onClick={() => { SetCyl_L(increaseRx(cyl_l, 0.25, 2)) }}>+</button>
            <label className='Label'>Axis:</label>
            <button onClick={() => { SetAxis_L(decreaseRx(axis_l, 5.00, 0, 0, 180)) }}>-</button>
            <input onChange={(e) => SetAxis_L(e.target.value)} className='input' value={axis_l} />
            <button onClick={() => { SetAxis_L(increaseRx(axis_l, 5.00, 0, 0 ,180)) }}>+</button>
            <label className='Label'>PD:</label>
            <button onClick={() => { SetPd_L(decreaseRx(pd_l, 0.50, 1, 25, 40)) }}>-</button>
            <input onChange={(e) => SetPd_L(e.target.value)} className='input' value={pd_l} />
            <button onClick={() => { SetPd_L(increaseRx(pd_l, 0.50, 1, 25, 40)) }}>+</button>
          </div>
        </div>

        {
          //Frame details
        }

        <div className='Subcontainer'>
          <div className='Heading'>Frame Details</div>
          <div className='FrameInputs'>
            <p className="Label">Size:</p>
            <button onClick={() => { SetFrameSize(decreaseRx(frameSize, 1, 0, 43, 63)) }} >-</button>
            <input onChange={(e) => SetFrameSize(e.target.value)} className='input' value={frameSize}/>
            <button onClick={() => { SetFrameSize(increaseRx(frameSize, 1, 0, 43, 63)) }}>+</button>
            <p className='Label'>Dbl:</p>
            <button onClick={() => { SetDbl(decreaseRx(dbl, 1, 0, 14, 23)) }} >-</button>
            <input onChange={(e) => SetDbl(e.target.value)} className='input' value={dbl}/>
            <button onClick={() => { SetDbl(increaseRx(dbl, 1, 0, 14, 23)) }} >+</button>
            <p className='Label'>Ed:</p>
            <button onClick={() => { SetEd(decreaseRx(ed, 1, 0, 43, 70)) }} >-</button>
            <input onChange={(e) => SetEd(e.target.value)} className='input' value={ed}/>
            <button onClick={() => { SetEd(increaseRx(ed, 1, 0, 43, 70)) }} >+</button>
            <label className='Label'>Frame Type:</label>
            <select onChange={(e) => setFrameType(e.target.value)} className='Dropdown'>
              <option key='0' value='Metal'>Metal</option>
              <option key='1' value='Plastic'>Plastic</option>
              <option key='2' value='Supra'>Supra</option>
              <option key='3' value='Rimless'>Rimless</option>
            </select>

          </div>
        </div>
        
        {
          //Results
        }
        <div className='Subcontainer'>
          <div className='Heading'>Results</div>
          <div className="Results">
            <div className="ResultRight">
              <p className="Eye">Right Lens:</p>
              <p>Estimated blank size: {displayBlankSizeResult(blankSizeR)}</p>
              <p>Thickness with 1.5: {displayLensResult(frameType, resultsRight[0])}</p>
              <p>Thickness with 1.6: {displayLensResult(frameType, resultsRight[1])}</p>
              <p>Thickness with 1.67: {displayLensResult(frameType, resultsRight[2])}</p>
              <p>Thickness with 1.74: {displayLensResult(frameType, resultsRight[3])}</p>
            </div>
            <div className="ResultLeft">
              <p className="Eye">Left Lens:</p>
              <p>Estimated blank size: {displayBlankSizeResult(blankSizeL)}</p>
              <p>Thickness with 1.5: {displayLensResult(frameType, resultsLeft[0])}</p>
              <p>Thickness with 1.6: {displayLensResult(frameType, resultsLeft[1])}</p>
              <p>Thickness with 1.67: {displayLensResult(frameType, resultsLeft[2])}</p>
              <p>Thickness with 1.74: {displayLensResult(frameType, resultsLeft[3])}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
