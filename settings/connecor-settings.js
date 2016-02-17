'use strict'

var Settings = require('./settings.js')

var settings = new Settings()

var options = 'I am options!!!'

var toggleWebHook = function(options) {
  console.log('in toggleWebHook: ' + options)
}

settings.register({
  name: 'toggleWebHook'
  , method: toggleWebHook
})

settings.save(options, 'toggleWebHook')
settings.save(options, 'A_NEW_FUCTION')
settings.save(options, 'enable')
