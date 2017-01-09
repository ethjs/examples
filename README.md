## ethjs-examples

A set of example dApps and apps using `ethjs`.

## Install

```
git clone http://github.com/ethjs/examples
cd examples
```

## Hosted

[ethjs-examples.surge.sh](http://ethjs-examples.surge.sh)

## Usage

Open any of the `.html` files in `Chrome` or `Firefox`. Everything runs out of the box.

## Available Examples

  - [Account dApp](http://ethjs-examples.surge.sh/accounts.html) - [code](./accounts.html) -- See your Ethereum accounts and balances
  - [Ballot dApp](http://ethjs-examples.surge.sh/ballot.html) - [code](./ballot.html) -- The Ballot.sol dApp from the Solidity Read the docs
  - [Blockchain Explorer](http://ethjs-examples.surge.sh/blockchain-explorer.html) -  [code](./blockchain-explorer.html) Lookup blocks and transactions on the Etheruem mainnet, via Infura.io
  - [First Contract dApp](http://ethjs-examples.surge.sh/first-contract.html) -  [code](./first-contract.html) - Set and Get from a SimpleStore contract
  - [Simple Auction dApp](http://ethjs-examples.surge.sh/simple-auction.html) -  [code](./simple-auction.html) - [try now](http://www.webpackbin.com/4yJyG0hrG) -- A simple Ethereum auction from the Solidity examples
  - [Token Wallet](http://ethjs-examples.surge.sh/token-wallet.html) -  [code](./token-wallet.html) - Send and receive EC20 standard tokens
  - [TicTacToe](http://ethjs-examples.surge.sh/tictactoe.html) -  [code](./tictactoe.html) - [try now](http://www.webpackbin.com/V1hFA02Bz) -- A tic tac toe game, the winning player gets the reward!

## About

This is a small set of dApps and apps using `ethjs`. Each example is meant to demonstrate correct usage of `ethjs` modules, namely, the [`ethjs`](http://github.com/ethjs/ethjs) module.

Many of these examples use `ethereumjs-testrpc` to simulate an Ethereum node running in the browser. This is meant to get you up and running with Ethereum, so configuration is kept to a minimum. Once you feel ready to go to an actual node or client, please use any one of the available nodes or clients listed below.

## Libraries Used

  - [TestRPC](http://github.com/ethereumjs/testrpc) - An entire Ethereum node simulator written in Javascript
  - [ethjs](http://github.com/ethjs/ethjs) - A simple JS utility library for Ethereum

## Enable Metamask Support

Once your ready to go live on the Ethereum `mainnet` or `testnet`, simply add this script to make your dApp to make it MetaMask ready (note every example has this script commented off by default, simply uncomment it to enable support).

```js
if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
  eth.setProvider(window.web3.currentProvider);
} else {
  eth.setProvider(provider);
}
```

## Contributing

Please help better the ecosystem by submitting issues and pull requests to default. We need all the help we can get to build the absolute best linting standards and utilities. We follow the AirBNB linting standard and the unix philosophy.

## Guides

Please see the Ethereum RPC specification hosted on their github:

https://github.com/ethereum/wiki/wiki/JSON-RPC

## Help out

There is always a lot of work to do, and will have many rules to maintain. So please help out in any way that you can:

- Create, enhance, and debug ethjs rules (see our guide to ["Working on rules"](./github/CONTRIBUTING.md)).
- Improve documentation.
- Chime in on any open issue or pull request.
- Open new issues about your ideas for making `ethjs-schema` better, and pull requests to show us how your idea works.
- Add new tests to *absolutely anything*.
- Spread the word.

Please consult our [Code of Conduct](CODE_OF_CONDUCT.md) docs before helping out.

We communicate via [issues](https://github.com/ethjs/ethjs-schema/issues) and [pull requests](https://github.com/ethjs/ethjs-schema/pulls).

## Important documents

- [Changelog](CHANGELOG.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [License](https://raw.githubusercontent.com/ethjs/ethjs-schema/master/LICENSE)

## Licence

This project is licensed under the MIT license, Copyright (c) 2016 Nick Dodson. For more information see LICENSE.md.

```
The MIT License

Copyright (c) 2016 Nick Dodson. nickdodson.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
