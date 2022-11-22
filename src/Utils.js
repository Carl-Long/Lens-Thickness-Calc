
const decreaseRx = (rx, decrement, decimals, min, max) => {
  if (rx === '' || rx === 'NaN') {
    rx = 0;
  }
  rx = rx - decrement;
  if(min !== null) {
    if(rx < min){
      rx = min;
    }
    else if (rx > max){
      rx = max;
    }
  }
  rx = rx.toFixed(decimals);
  return rx.toString();
}

const increaseRx = (rx, increment, decimals, min, max) => {
  if (rx === '' || rx ==='NaN') {
    rx = 0;
  }
  rx = parseFloat(rx);
  rx = rx + increment
  if(max!== null) {
    if(rx > max){
      rx = max;
    }
    else if(rx < min){
      rx = min;
    }
  }
  rx = rx.toFixed(decimals);
  return rx.toString();
}


const calcBlank = (pd, frameSize, dbl, ed) => {
  pd = parseFloat(pd);
  frameSize = parseInt(frameSize);
  dbl = parseInt(dbl);
  ed = parseInt(ed);

  let framePd = (frameSize + dbl) / 2;
  let decentration = framePd - pd;
  let blankSize = ed + (decentration * 2) + 2;
  return (blankSize)
}

const displayBlankSizeResult = (blankSize) => {
  let colour = '';
  if (blankSize <= 65) {
    colour = 'green'
  }
  else if (blankSize <= 70) {
    colour = 'orange'
  }
  else {
    colour = 'red'
  }
  return <text style={{ color: `${colour}` }}>{blankSize} </text>
}

const getCylEffect = (axis) => {
  if ((axis >= 0 && axis < 30) || (axis <= 180 && axis > 150)) {
    return 0;
  }
  else if ((axis >= 30 && axis < 45) || (axis <= 150 && axis > 135)) {
    return 0.25;
  }
  else if ((axis >= 45 && axis < 60) || (axis <= 135 && axis > 120)) {
    return 0.50;
  }
  else if ((axis >= 60 && axis < 80) || (axis <= 120 && axis > 100)) {
    return 0.75;
  }
  else {
    return 1;
  }
}

const calcThickness = (frameType, sph, cyl, axis, blankSize) => {
  sph = parseFloat(sph);
  cyl = parseFloat(cyl);
  axis = parseFloat(axis);
  let cylEffect = getCylEffect(axis);

  let power = sph + (cyl * cylEffect);
  power = Math.abs(power);

  let additionalThickness = 0;

  if (frameType !== 'Metal' && frameType !== 'Plastic') {

    if (frameType === 'Supra') {
      additionalThickness = 0.3;
    }
    else if (frameType === 'Rimless') {
      additionalThickness = 0.7;
    }
  }

  const halfBlankSquared = (blankSize / 2) * (blankSize / 2);
  const formulaTop = halfBlankSquared * power;

  let standard = (formulaTop / (2000 * (0.499))) + 1.5 + additionalThickness;

  let extraThin = (formulaTop / (2000 * (0.6))) + 1 + additionalThickness;

  let superThin = (formulaTop / (2000 * (0.67))) + 1 + additionalThickness;

  let ultraThin = (formulaTop / (2000 * (0.74))) + 1 + additionalThickness;

  if (standard < 2) {
    standard = 2;
  }
  else {
    standard = standard.toFixed(1);
  }

  if (extraThin < 2) {
    extraThin = 2
  }
  else {
    extraThin = extraThin.toFixed(1);
  }

  if (superThin < 2) {
    superThin = 2;
  }
  else {
    superThin = superThin.toFixed(1);
  }

  if (ultraThin < 2) {
    ultraThin = 2;
  }
  else {
    ultraThin = ultraThin.toFixed(1);
  }

  return [standard, extraThin,superThin, ultraThin];
}


const displayLensResult = (frameType, thickness) => {
  let rimWidth = 2;

  if (frameType === 'Plastic') {
    rimWidth = 4;
  }
  else if (frameType === 'Rimless' || frameType === 'Supra') {
    rimWidth = 0;
  }

  let visibleThickness = thickness - rimWidth;
  visibleThickness = visibleThickness.toFixed(1);

  if (visibleThickness < 0) {
    visibleThickness = 0;
  }

  let colour = '';
  if (visibleThickness <= 1.5) {
    colour = 'green';
  }
  else if (visibleThickness > 1.5 && visibleThickness <= 3) {
    colour = 'orange';
  }
  else {
    colour = 'red';
  }
  return <text style={{ color: `${colour}` }}>{thickness}mm: ({visibleThickness}) </text>
}




export { decreaseRx, increaseRx, calcBlank, getCylEffect, displayBlankSizeResult, calcThickness, displayLensResult }