node-olisto
==============================

![olisto: Downloads](https://img.shields.io/npm/dt/olisto.svg?style=flat) ![olisto: Version](https://img.shields.io/npm/v/olisto.svg)

Use Olisto Connect in your Javascript projects!

Usage
------------------------------

```js
const Olisto = require('olisto');

const connector = new Olisto('YOUR CONNECT URL');

connector.setOn();
```

Methods
------------------------------

### Olisto.setOn();
Turns on the connector on the url that was initialized at the creation of the Olisto object.

### Olisto.setValue(val);
Sets an specific value for an connector.

Value must be a string.

### ~~Olisto.getValue();~~
~~Returns the stored value in an Olisto connector.~~

~~Returns a string~~

The Olisto connect service doesn't support that right now. Stay tuned for updates.
