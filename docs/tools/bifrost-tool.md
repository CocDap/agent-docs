---
title: Bifrost Liquid Staking Tool
description: Developer documentation for the Bifrost Liquid Staking Tool API using Polkadot Agent Kit
icon: 'code'  
---

## Available Tools

| Tool Name | Schema | Purpose | Input Fields |
|-----------|--------|---------|--------------|
| `mint_vdot` | `mintVdotSchema` | Mint vDOT tokens on Bifrost for liquid staking DOT | `amount` |

---

## Integration

The Bifrost liquid staking feature is available out-of-the-box via the Polkadot Agent Kit's tools:
- `mintVdotTool()`

---

## Usage

### Mint vDOT Tokens
Prompt: 
```
await agent.prompt("stake 10 DOT to get vDOT on Bifrost")
```

Replace values like amounts as needed.

---

## How It Works

- **Mint vDOT:**
  - The Agent uses the `mintVdotTool()` from the Polkadot Agent Kit.
  - It parses your message for the DOT amount to stake.
  - Converts the amount to planck units and executes the mintVDot transaction on Bifrost.

---

## Example Code

### Get Mint vDOT Tool

```ts
const mintVdot = agent.mintVdotTool();
```

---