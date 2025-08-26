---
title: Nomination Staking Tool API
description: Developer documentation for the Nomination Staking Tool API using Polkadot Agent Kit
icon: 'code'  
---

## Available Tools

| Tool Name | Schema | Purpose | Input Fields |
|-----------|--------|---------|--------------|
| `join_pool` | `joinPoolToolSchema` | Join a nomination pool for staking | `amount`, `chain` |
| `bond_extra` | `bondExtraToolSchema` | Bond extra tokens to a nomination pool | `type` ("FreeBalance" or "Rewards"), `amount` (optional for "Rewards"), `chain` |
| `unbond` | `unbondToolSchema` | Unbond tokens from a nomination pool | `amount`, `chain` |
| `withdraw_unbonded` | `withdrawUnbondedToolSchema` | Withdraw unbonded tokens from a nomination pool | `slashingSpans`, `chain` |
| `claim_rewards` | `claimRewardsToolSchema` | Claim rewards from a nomination pool | `chain` |

---

## Integration

The nomination staking features are available out-of-the-box via the Polkadot Agent Kit's tools:
- `joinPoolTool()`
- `bondExtraTool()`
- `unbondTool()`
- `withdrawUnbondedTool()`
- `claimRewardsTool()`

---

## Usage

### Join Nomination Pool
Prompt: 
```
await agent.prompt("join pool with 10 DOT on Polkadot")
```

### Bond Extra (FreeBalance)
Prompt:
```
await agent.prompt("bond extra 100 DOT on Polkadot")
```

### Bond Extra (Rewards)
Prompt:
```
await agent.prompt("re-stake my rewards on Polkadot")
```

### Unbond Tokens
Prompt:
```
await agent.prompt("unbond 50 DOT on Polkadot")
```

### Withdraw Unbonded
Prompt:
```
await agent.prompt("withdraw unbonded with 1 slashing spans on Polkadot")
```

### Claim Rewards
Prompt:
```
await agent.prompt("claim rewards on Polkadot")
```

Replace values like amounts, chain names, and addresses as needed.

---

## How It Works

- **Join Pool:**
  - The Agent uses the `joinPoolTool()` from the Polkadot Agent Kit.
  - It parses your message for amount and chain, then joins the nomination pool with the specified amount.

- **Bond Extra:**
  - The Agent uses the `bondExtraTool()` from the Polkadot Agent Kit.
  - For "FreeBalance" type, it parses amount and chain to bond additional tokens from wallet.
  - For "Rewards" type, it re-stakes all earned rewards without needing an amount.

- **Unbond:**
  - The Agent uses the `unbondTool()` from the Polkadot Agent Kit.
  - It parses amount and chain to start unbonding the specified amount.

- **Withdraw Unbonded:**
  - The Agent uses the `withdrawUnbondedTool()` from the Polkadot Agent Kit.
  - It parses slashingSpans and chain to withdraw unbonded tokens.

- **Claim Rewards:**
  - The Agent uses the `claimRewardsTool()` from the Polkadot Agent Kit.
  - It parses chain to claim all pending rewards.

---

## Example Code

### Get Join Pool Tool

```ts
const joinPool = agent.joinPoolTool();
```

### Get Bond Extra Tool

```ts
const bondExtra = agent.bondExtraTool();
```

### Get Unbond Tool

```ts
const unbond = agent.unbondTool();
```

### Get Withdraw Unbonded Tool

```ts
const withdrawUnbonded = agent.withdrawUnbondedTool();
```

### Get Claim Rewards Tool

```ts
const claimRewards = agent.claimRewardsTool();
```

---