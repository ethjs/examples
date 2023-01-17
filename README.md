## dApp Examples

A set of example dApps and apps using `web3.js` to showcase the usage of Universal Profiles. This repository is meant to get you up and running with the [Universal Profile Extension](https://docs.lukso.tech/guides/universal-profile/browser-extension/install-browser-extension) but also works using [MetaMask](https://metamask.io/) and having less convenience.

All listed examples are live on [examples.lukso.tech](https://examples.lukso.tech/), which features further examples that connect to the LUKSO L14 or L16 testnetworks.

## Features

- [Account dApp](http://example-dapps.lukso.tech/accounts-dapp) -- See your Ethereum accounts and balances in [accounts](./accounts.html)
- [Simple Storage dApp](http://example-dapps.lukso.tech/simple-storage-dapp) -- Set and Get from a SimpleStore contract in [simple-storage](./simple-storage.html)

## Deployment and Hosting

All example dApps on LUKSO are deployed using a custom CI/CD script to host several repositories to one domain with several subfolders. Please deploy merged changes with the GitHub Workflow in the [example-hosting](https://github.com/lukso-network/example-hosting) repository.

## Local Development

Search for 'local build' and follow the steps provided in the commentary of `accounts.html`, `index.html`, and `simple-storage.html` to fix broken links.

```
python3 -m http.server --cgi 8080
```

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

## Libraries

- [web3.js](https://web3js.readthedocs.io/en/v1.7.3/)
