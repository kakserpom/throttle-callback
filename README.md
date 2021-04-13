throttle-callback
=======
[![total downloads of throttle-callback](https://img.shields.io/npm/dt/throttle-callback.svg)](https://www.npmjs.com/package/throttle-callback)
[![throttle-callback's License](https://img.shields.io/npm/l/throttle-callback.svg)](https://www.npmjs.com/package/throttle-callback)
[![latest version of throttle-callback](https://img.shields.io/npm/v/throttle-callback.svg)](https://www.npmjs.com/package/throttle-callback)

*Throttle a callback*

```js
const throttleCallback = require('throttle-callback')
const callback = throttleCallback(
    arg => console.log(arg),
    10 // Milliseconds
)
callback('One')
callback('Two')
callback('Three')
    
// Three
```