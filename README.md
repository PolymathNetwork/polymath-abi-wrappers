## @polymathnetwork/abi-wrappers

[![Greenkeeper badge](https://badges.greenkeeper.io/PolymathNetwork/polymath-abi-wrappers.svg)](https://greenkeeper.io/)

Low-level Polymath smart contract wrappers generated using @0x/abi-gen with custom poly template. These low-level wrappers are imported by other packages and application developers are not expected to import this package directly.

## Installation

```bash
yarn add @polymathnetwork/abi-wrappers
```

**Import**

```typescript
import * as wrappers from '@polymathnetwork/abi-wrappers';
```

or

```javascript
var wrappers = require('@polymathnetwork/abi-wrappers');
```

## Contributing

We welcome improvements and fixes from the wider community! To report bugs within this package, please create an issue in this repository.

### Install dependencies

If you don't have yarn workspaces enabled (Yarn < v1.0) - enable them:

```bash
yarn config set workspaces-experimental true
```

Then install dependencies

```bash
yarn install
```

### Build

To build this package run the following from root directory:

```bash
yarn pre_build && yarn build
```