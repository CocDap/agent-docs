---
title: 'Quick Start'
description: 'Start building Polkadot Agent Kit in under 5 minutes'
---

## Install Polkadot Agent Kit

Install the Polkadot Agent Kit SDK using your preferred package manager.

<CodeGroup>

```bash pnpm
pnpm add @polkadot-agent-kit/sdk
```

</CodeGroup>

## Basic Usage

The Polkadot Agent Kit SDK provides a set of tools to help you build agents that can interact with the Polkadot network.

### Create a new Polkadot Agent 

<CodeGroup>

```typescript
  import { PolkadotAgentKit } from '@polkadot-agent-kit/sdk';

  // Define the Polkadot Agent Kit API
  const agent = new PolkadotAgentKit(<your private key>, {
      keyType: "Sr25519", // "Ed25519", "Ecdsa"
  });
  // Initialize the Polkadot Agent Kit API to connect to the Polkadot network
  agent.initializeApi();

  // Set up tools
  // Get balance of agent account
  const checkBalance = agent.getNativeBalanceTool();
  // Transfer native tokens to a recipient address on a specific chain.
  const transferNative = agent.transferNativeTool();
  // Transfer native tokens to a recipient address on a specific chain via xcm.
  const xcmTransferNativeAsset = agent.xcmTransferNativeTool();

```

</CodeGroup>


## Tools Call API Navigation  

- **[Token Tool API](/tools/token-tool)** - Manage and interact with tokens across the Polkadot ecosystem
- **[XCM Tool API](/tools/xcm-tool)** - Cross-chain messaging operations for transferring assets and data
- **[NFT Tool API](/tools/nft-tool)** - NFT management and operations including minting and transferring
- **[DEFI Tool API](/tools/defi-tool)** - DeFi operations including liquidity provision and yield farming
