<img src="https://raw.githubusercontent.com/rogerbf/ior/master/ior-logo.png" width="200px" height="200px">

# IOR-JS

Convert IOR to JavaScript.

``` javascript
const IOR = require('ior')

const str = 'system:\n  cpu: quad core'

IOR.parse(str)

// {
//   system: {
//     cpu: "quad core"
//   }
// }
```
