---
title: XCM Tool API
description: Developer documentation for the XCM Tool API using Polkadot Agent Kit
icon: 'code'
---

## Available Tools

| Tool Name              | Schema                  | Purpose                        | Input Fields                          |
|-----------------------|-------------------------|---------------------------------|---------------------------------------|
| `XCM_TRANSFER_NATIVE` | `xcmTransferToolSchema` | Transfer native tokens via XCM  | `amount`, `to`, `sourceChain`, `destChain` |
---

## Integration

The XCM transfer feature is available out-of-the-box via the Polkadot Agent Kit's tool:
- `xcmTransferNativeTool()`

---

## Usage in Telegram

### XCM Transfer Native
Prompt:
```
await client.prompt("transfer 1 DOT to <recipient_address> from polkadot to polkadot asset hub ")
```

Replace `<recipient_address>` with the actual address you want to send tokens to. Specify both the source and destination chains.

---

## How It Works

- **XCM Transfer:**
  - The bot uses the `xcmTransferNativeTool()` from the agent kit.
  - It parses your message for amount, recipient, source chain, and destination chain, then initiates the cross-chain transfer using XCM.

---

## Example Code

### XCM Transfer Native Tool Usage

```ts
const xcmTransferNative = agent.xcmTransferNativeTool();
```
---


