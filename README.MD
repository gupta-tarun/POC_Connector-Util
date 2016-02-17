# POC for connector-utils

This is a sample code to complete the POC for the basis of utils.

To run this by yourself please do the following steps

```
git clone git@github.com:github-sandeep/POC_Connector-Util.git
cd settings
node connecor-settings.js
```
If you want to add any additional function go and edit the connecor-settings.js file.

and add that to utils with this syntax:
```
var aNewFunction = function(options) {
    console.log('in aNewFunction: ' + options)
    }
    
    settings.register({
        name: 'aNewFunction'
          , method: aNewFunction
          })
 ```
