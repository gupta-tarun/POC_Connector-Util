'use strict'

var Settings = require('./settings.js')
  , func = require('./methodImpl.js')

var settings = new Settings()

var options =
  { source: "IO"
  , type: "JSOn"
  }

var toggleWebHook = function(content) {
  console.log('in toggleWebHook: ' + content)
}

settings.register({name:'enable', method:func['enable']})
settings.register({name:'saveSearch', method:func['saveSearch']})
settings.register({name:'toggleWebHook', method:toggleWebHook})
settings.save(options)
