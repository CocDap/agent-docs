---
title: DeFi Swap Tool
description: Developer documentation for the DeFi Swap Tool API using Polkadot Agent Kit
icon: 'code'  
---

## Available Tools

| Tool Name | Schema | Purpose | Input Fields |
|-----------|--------|---------|--------------|
| `swap_tokens` | `swapTokensToolSchema` | Swap tokens across different chains using XCM or within a specific DEX | `amount`, `currencyFrom`, `currencyTo`, `from` (optional for cross-chain), `to` (optional for cross-chain), `dex` (optional for DEX-specific), `receiver` (optional) |

---

## Integration

The DeFi swap features are available out-of-the-box via the Polkadot Agent Kit's tools:
- `swapTokensTool()`

---

## Usage

### Cross-Chain Swap
Prompt: 
```
await agent.prompt("swap 1 DOT from Polkadot to USDT on Hydra")
```

### DEX-Specific Swap
Prompt:
```
await agent.prompt("swap 0.5 DOT to USDT on HydrationDex")
```

Replace values like amounts, currencies, chains, and DEX names as needed.

---

## How It Works

- **Cross-Chain Swap:**
  - The Agent uses the `swapTokensTool()` from the Polkadot Agent Kit.
  - It parses your message for amount, currencyFrom, currencyTo, from chain, to chain, and optional receiver.
  - Executes the swap across chains using XCM routing.

- **DEX-Specific Swap:**
  - The Agent uses the same `swapTokensTool()` but omits from/to chains.
  - Parses for amount, currencyFrom, currencyTo, dex (defaults to HydrationDex), and optional receiver.
  - Executes the swap within the specified DEX.

---

## Example Code

### Get Swap Tokens Tool

```ts
const swapTokens = agent.swapTokensTool();
```

---