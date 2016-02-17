'use strict'

var func = {}

func.enable = function(content) {
  console.log('in enableOperation: ' + content)
}

func.saveSearch = function(content) {
  console.log('in saveSearchOperation: ' + content)
}

module.exports = func
