var jsdom = require('jsdom');
const { JSDOM } = jsdom;
var exposedProperties = ['window', 'navigator', 'document'];

const { document } = (new JSDOM('')).window;
global.document = document;
global.Headers = ()=>{}

global.window = document.defaultView;
import localStorage from 'mock-local-storage'
window.localStorage = global.localStorage

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

