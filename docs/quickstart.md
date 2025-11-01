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

// Initialize the Polkadot Agent Kit with your credentials
const agent = new PolkadotAgentKit({
  privateKey: "your-private-key-here",
  keyType: "Sr25519", // Options: "Sr25519", "Ed25519", "Ecdsa"
});

// Connect to the Polkadot network
await agent.initializeApi();

// Option 1: Get specific tools individually
const balanceTool = agent.getNativeBalanceTool();
const transferTool = agent.transferNativeTool();
const xcmTransferTool = agent.xcmTransferNativeTool();

// Option 2: Get all available tools at once
const allTools = agent.getLangChainTools();

// Now you can use these tools with your AI agent or LangChain
```

</CodeGroup>



## Tools Call API Navigation  

- **[Token Tool API](/tools/token-tool)** - Manage and interact with tokens across the Polkadot ecosystem
- **[XCM Tool API](/tools/xcm-tool)** - Cross-chain messaging operations for transferring assets and data
- **[DEFI Tool API](/tools/defi-tool)** - DeFi operations including liquidity provision and yield farming
- **[Nomination Staking Tool API](/tools/nomination-staking-tool)** - Nomination pool management and staking operations
- **[Bifrost Tool API](/tools/bifrost-tool)** - Bifrost parachain operations including liquid staking and cross-chain functionality


## Full Examples 
- **[Telegram Bot](/examples/telegram-bot)** - Natural language Telegram bot for token transfers, balance checks, and XCM operations
- **[MCP Server](/examples/mcp-server)** - Model Context Protocol server exposing Polkadot Agent Kit tools for AI agents and LLM applications
- **[Polkadot Agent Playground](/examples/playground)** - Interactive playground for testing and exploring Polkadot Agent Kit capabilities
