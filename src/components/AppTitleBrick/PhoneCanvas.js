import React from 'react';

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 572;
const SCREENSHOT_OFFSET_X = 19;
const SCREENSHOT_OFFSET_Y = 67;
const SCREENSHOT_WIDTH = 261;
const SCREENSHOT_HEIGHT = 434;

function drawCase(canvas2d) {

  return new Promise((resolve, reject) => {

      var img = new Image;

      img.onload = () => {
        canvas2d.drawImage(img,0,0);
        resolve();
      };

      img.width = CANVAS_WIDTH;
      img.height = CANVAS_HEIGHT;
      img.src = require('../../images/phoneoverlay.png');

  });

}

function drawScreenshot(canvas2d, screenshotUrl) {

  return new Promise((resolve, reject) => {

      var img = new Image;

      img.onload = () => {
        canvas2d.drawImage(img, SCREENSHOT_OFFSET_X, SCREENSHOT_OFFSET_Y, SCREENSHOT_WIDTH, SCREENSHOT_HEIGHT);
        resolve();
      };

      img.src = screenshotUrl;

  });

}

function drawCanvas(canvas, props) {

  var canvas2d = canvas.getContext('2d');

  drawCase(canvas2d)
    .then(() => drawScreenshot(canvas2d, props.screenshotUrl));

}

export default (props) => {
  return (<canvas ref={ (c) => drawCanvas(c, props) } width={ CANVAS_WIDTH } height={ CANVAS_HEIGHT } />);
}
