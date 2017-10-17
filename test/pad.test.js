'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.text = {}; fav.text.pad = require('..');

var pad = fav.text.pad;

describe('fav.text.pad', function() {

  it('Should fill odd number of paddings', function() {
    expect(pad('abcd', 5, '_')).to.equal('abcd_');
    expect(pad('abcd', 7, '_')).to.equal('_abcd__');
    expect(pad('abcd', 9, '_')).to.equal('__abcd___');
    expect(pad('abcd', 11, '_')).to.equal('___abcd____');

    expect(pad('abcd', 5, '_#')).to.equal('abcd_');
    expect(pad('abcd', 7, '_#')).to.equal('_abcd_#');
    expect(pad('abcd', 9, '_#')).to.equal('_#abcd_#_');
    expect(pad('abcd', 11, '_#')).to.equal('_#_abcd_#_#');
  });

  it('Should fill even number of paddings', function() {
    expect(pad('abcd', 6, '_')).to.equal('_abcd_');
    expect(pad('abcd', 8, '_')).to.equal('__abcd__');
    expect(pad('abcd', 10, '_')).to.equal('___abcd___');
    expect(pad('abcd', 12, '_')).to.equal('____abcd____');

    expect(pad('abcd', 6, '_#')).to.equal('_abcd_');
    expect(pad('abcd', 8, '_#')).to.equal('_#abcd_#');
    expect(pad('abcd', 10, '_#')).to.equal('_#_abcd_#_');
    expect(pad('abcd', 12, '_#')).to.equal('_#_#abcd_#_#');
  });

  it('Should return `source` when `length` <= `source`.length', function() {
    expect(pad('abcd', 0, '_')).to.equal('abcd');
    expect(pad('abcd', 1, '_')).to.equal('abcd');
    expect(pad('abcd', 2, '_')).to.equal('abcd');
    expect(pad('abcd', 3, '_')).to.equal('abcd');
    expect(pad('abcd', 4, '_')).to.equal('abcd');

    expect(pad('abcd', 0, '_#')).to.equal('abcd');
    expect(pad('abcd', 1, '_#')).to.equal('abcd');
    expect(pad('abcd', 2, '_#')).to.equal('abcd');
    expect(pad('abcd', 3, '_#')).to.equal('abcd');
    expect(pad('abcd', 4, '_#')).to.equal('abcd');
  });

  it('Should pad white spaces when `padding` is not specified', function() {
    expect(pad('abcd', 5)).to.equal('abcd ');
    expect(pad('abcd', 6)).to.equal(' abcd ');
    expect(pad('abcd', 7)).to.equal(' abcd  ');
    expect(pad('abcd', 8)).to.equal('  abcd  ');
    expect(pad('abcd', 9)).to.equal('  abcd   ');
    expect(pad('abcd', 10)).to.equal('   abcd   ');
    expect(pad('abcd', 11)).to.equal('   abcd    ');
    expect(pad('abcd', 12)).to.equal('    abcd    ');
  });

  it('Should return source when `length` is not specified', function() {
    expect(pad('')).to.equal('');
    expect(pad('a')).to.equal('a');
    expect(pad('abcd')).to.equal('abcd');
  });

});
