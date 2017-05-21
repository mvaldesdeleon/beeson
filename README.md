# beeson

Transparent binary JSON-based serialization.

Why? Because none of the existing JSON-based binary libraries out there seem to support transparent serialization followed by deserialization, out of the box.

So I picked the one that was closest to what I needed and gave it that extra push.

```JS
var beeson = require('beeson');

var stuff = [undefined, null, new Date(), new Buffer('hello'), {a:1, b: null, c: 'hello', d: [], e: undefined}];

beeson.deserialize(beeson.serialize(stuff));
// Profit
```

# install
with [npm](https://npmjs.org) do:

```
npm install beeson
```

# license

MIT
