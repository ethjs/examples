## dApp Examples

A set of example dApps and apps using `web3.js` to showcase the usage of Universal Profiles.

## Install and run locally

```
git clone https://github.com/lukso-network/example-dapps
cd example-dapps
```

Search for 'local build' and follow the steps provided in the commentary of `accounts.html`, `index.html`, and `simple-storage.html` to fix broken links.

```
python3 -m http.server --cgi 8080
```

## Hosted

[LUKSO Sample dApps](http://example-dapps.lukso.tech/)

## Usage

Open any of the `.html` files in `Chrome` or `Firefox`. Everything runs out of the box.

## Available Examples

- [Account dApp](http://example-dapps.lukso.tech/accounts-dapp) - [code](./accounts.html) -- See your Ethereum accounts and balances
- [Simple Storage dApp](http://example-dapps.lukso.tech/simple-storage-dapp) - [code](./simple-storage.html) -- Set and Get from a SimpleStore contract

## About

This is a small set of dApps using `web3.js`.

All listed examples on the hosted [landingpage](http://example-dapps.lukso.tech/accounts-dapp) also feature other repositories that connect to the LUKSO L14 or L16 testnetworks. This is meant to get you up and running with the [Universal Profile Extension](https://docs.lukso.tech/guides/universal-profile/browser-extension/install-browser-extension) but also works using the [MetaMask](https://metamask.io/) by having less convenience.

## Libraries

- [web3.js](https://web3js.readthedocs.io/en/v1.7.3/)

## Licence

The project was forked and is licensed under the MIT license as its original.

```
The MIT License

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