# has-native-promise

> Tiny module for checking if Promise are natively available.

## Installation

```bash
npm install --save has-native-promise
```

## Example

```javascript
const hasNativePromise = require('has-native-promise')

// on Node < 0.11.13
console.log(hasNativePromise()) // false

// on Node >= 0.11.13
console.log(hasNativePromise()) // true
```
