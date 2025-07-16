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

## Usage in Telegram

### Check Native Balance
Prompt: 
```
await client.prompt("check balance on polkadot")
```

### Transfer Native Balance

Prompt:
```
await client.prompt("transfer 1 DOT to <recipient_address> on polkadot")
```

Replace `<recipient_address>` with the actual address you want to send tokens to.

---

## How It Works

- **Balance Check:**
  - The bot uses the `getNativeBalanceTool()` from the agent kit.
  - It parses your message, normalizes the chain name, and queries the balance for the agent's account.
- **Transfer Native:**
  - The bot uses the `transferNativeTool()` from the agent kit.
  - It parses your message for amount, recipient, and chain, then initiates the transfer.

---

## Example Code

### Check Balance Tool Usage

```ts
const checkBalance = agent.getNativeBalanceTool();
const balance = await checkBalance({ chain: "polkadot" });
console.log("Balance:", balance);
```

### Transfer Native Tool Usage

```ts
const transferNative = agent.transferNativeTool();
const txResult = await transferNative({
  chain: "polkadot",
  to: "<recipient_address>",
  amount: "1"
});
console.log("Transfer result:", txResult);
```

---

## See Also

- [Telegram Bot Example Overview](../examples/telegram-bot)

