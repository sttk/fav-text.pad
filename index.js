'use strict';

var repeat = require('@fav/text.repeat');

function pad(source, length, padding) {
  if (!length || length <= source.length) {
    return source;
  }

  if (padding == null) {
    padding = ' ';
  }

  var padsLen = length - source.length;
  var padsNum = Math.ceil(padsLen / padding.length)
  var padsFull = repeat(padding, padsNum).slice(0, padsLen);
  var padsHalfPos = Math.floor(padsFull.length / 2);

  return (
    padsFull.slice(0, padsHalfPos) +
    source +
    padsFull.slice(0, padsLen - padsHalfPos)
  );
}

module.exports = pad;
