# Smart contract of "BTC vs ETH" game

[![hardhatBuild](https://github.com/YAY-Games/btc-vs-eth-contract/actions/workflows/hardhatBuild.yaml/badge.svg)](https://github.com/YAY-Games/btc-vs-eth-contract/actions/workflows/hardhatBuild.yaml)

- Language: Solidity v0.6.12

- Project framework: hardhat + truffle / web3

- Nodejs: v14.17.0

## Overview

### Deployed

- Binance Smart Chain Mainnet: ```0xc81d83c9c875b4a058b83b5b19d104284eaea8c9``` ([link](https://bscscan.com/address/0xc81d83c9c875b4a058b83b5b19d104284eaea8c9))

## Installation & Usage

1. Install packages
```
npm i --save-dev
```

2. Build project
```
npm run build
```

### Testing

```
npm test
```

### Run linter

```
npm run lint
```

### Deploy

1. Edit network in ```hardhat.config.js``` ([docs](https://hardhat.org/config/))

2. Setup environment variables:
```
cp .env.example .env
// then edit .env
```

3. Run command:
```
npx hardhat run scripts/deploy-script.js --network <network name>
```

## License

[MIT License](./LICENSE)
