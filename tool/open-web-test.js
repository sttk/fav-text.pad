'use strict';

const os = require('os');
const path = require('path');
const exec = require('child_process').exec;

const browsers = {
  darwin: {
    chrome: 'open -a "Google Chrome"',
    firefox: 'open -a firefox',
    vivaldi: 'open -a vivaldi',
    safari: 'open -a safari',
  },

  win32: {
    chrome: 'start chrome',
    firefox: 'start firefox',
    vivaldi: 'start vivaldi',
    ie: 'start iexplore',
  },

  linux: {
    chrome: 'google-chrome',
    firefox: 'firefox',
    vivaldi: 'vivaldi',
  },
};

if (os.platform() === 'win32') {
  console.warn('[WARN]', 'You have to test on MS Edge manually.');
}

const openers = browsers[os.platform()];
Object.keys(openers).forEach(ua => {
  exec([
    openers[ua],
    path.resolve(__dirname, '../test/web/browser-test.html'),
  ].join(' '), err => {
    if (err) {
      console.error(err);
    }
  });
});
