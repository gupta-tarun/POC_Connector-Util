'use strict'


function Settings() {
// constructor
}

Settings.prototype.register = function(funcObj) {
  Settings.prototype[funcObj.name]= funcObj.method
}

Settings.prototype.save = function (options) {
  // extract ['record_type', 'record_id',  'save_operation'] here

  // extract op here
  var op = 'toggleWebHook'
  var content = "saving record"
  if(typeof Settings.prototype[op] === 'function') {
    Settings.prototype[op](content)
  }
  else{
    console.log('not registered')
  }
}

module.exports= Settings
