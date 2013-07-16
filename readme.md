### getport

`npm install getport`

Find an open port to listen on.

#### `getport(function (e, port) {})``

```javascript
var getport = require('getport')
getport(function (e, p) {
  if (e) throw e
  server.listen(p)
})
```

*Note: getport uses a TCP client to check the ports and see if anyone has bound to them. If you do not have permission to bind to a port you may still get an error.*

#### `getport(start, function (e, port) {})`

```javascript
getport(5000, function (e, p) {
  if (e) throw e
  assert.equal(5000, p)
})
```

#### `getport(start, end, function (e, port) {})`

```javascript
getport(6000, 5999, function (e, p) {
  assert.ok(e)
})
```