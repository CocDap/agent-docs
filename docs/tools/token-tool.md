---
title: Token Tool API
description: Developer documentation for the Token Tool API using Polkadot Agent Kit
icon: 'code'  
---

## Available Tools

| Tool Name | Schema | Purpose | Input Fields |
|-----------|--------|---------|--------------|
| `CHECK_BALANCE` | `balanceToolSchema` | Check native token balance | `chain` |
| `TRANSFER_NATIVE` | `transferToolSchema` | Transfer native tokens | `amount`, `to`, `chain` |
---

## Integration

The balance and transfer features are available out-of-the-box via the Polkadot Agent Kit's tools:
- `getNativeBalanceTool()`
- `transferNativeTool()`

---

## Usage

### Check Native Balance
Prompt: 
```
await agent.prompt("check balance on polkadot")
```

### Transfer Native Balance

Prompt:
```
await agent.prompt("transfer 1 DOT to <recipient_address> on polkadot")
```

Replace `<recipient_address>` with the actual address you want to send tokens to.

---

## How It Works

- **Balance Check:**
  - The Agent uses the `getNativeBalanceTool()` from the Polkadot Agent Kit.
  - It parses your message, normalizes the chain name, and queries the balance for the agent's account.
- **Transfer Native:**
  - The Agent uses the `transferNativeTool()` from the Polkadot Agent Kit.
  - It parses your message for amount, recipient, and chain, then initiates the transfer.

---

## Example Code

### Get Check Balance Tool

```ts
const checkBalance = agent.getNativeBalanceTool();
```

### Get Transfer Native Tool

```ts
const transferNative = agent.transferNativeTool();
```

---

## See Also 

- [Telegram Bot Example Overview](../examples/telegram-bot)

