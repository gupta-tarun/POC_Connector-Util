'use strict'


function Settings() {
  // constructor
  var func = require('./methodImpl.js')

  //this is where we register the functions coming with utils

  this.register({
    name: 'enable'
    , method: func.enable
  })
  this.register({
    name: 'saveSearch'
    , method: func.saveSearch
  })
}

Settings.prototype.register = function(funcObj) {
  Settings.prototype[funcObj.name] = funcObj.method
}

Settings.prototype.save = function(options, op) {
  // extract ['record_type', 'record_id',  'save_operation'] here
  // extract op here
  if (typeof Settings.prototype[op] === 'function') {
    Settings.prototype[op](options)
  } else {
    console.log('operation ' + op + 'not registered')
  }
}

module.exports = Settings
