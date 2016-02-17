'use strict'

var func = {}

func.enable = function(options) {
  console.log('in enableOperation: ' + options)
}

func.saveSearch = function(options) {
  console.log('in saveSearchOperation: ' + options)
}

module.exports = func
