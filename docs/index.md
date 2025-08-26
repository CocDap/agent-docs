---
title: Introduction
description: "Polkadot Agent Kit"
---

## Overview
Polkadot Agent Kit is a modular, open-source toolkit designed to simplify the development of agent-based applications and bots for the Polkadot ecosystem. It provides reusable components, utilities, and patterns for interacting with `Polkadot` and `Parachain` networks, supporting both core blockchain operations and higher-level agent logic.


## Purposes 

* Empower developers to build intelligent, automated agents and bots that interact with the Polkadot ecosystem.
* Abstract away complexity of multi-chain operations, transaction management, and agent orchestration.
* Lower the barrier for developers to build on Polkadot and foster a robust ecosystem of agent-based applications.


## Key Features 

### Substrate's Light Client Connection
Connects to Polkadot, Kusama, and parachains via the `Smoldot Light Client` for decentralized, trustless network access without centralized RPCs.

### Wallet Management
Provides a unified interface for managing multiple Polkadot-compatible wallets, including `Sr25519` and `Ed25519` key types.

### Cross-Chain Transactions
Facilitates token transfers and operations via `XCM` (Cross-Consensus Messaging) between `Relay Chain`, `Asset Hub`, and `Parachains`.


## Core Packages 

| Package | Primary Responsibility | Key Dependencies |
|---------|----------------------|------------------|
| `@polkadot-agent-kit/sdk` | Public API interface | core, llm, common, @langchain/core |
| `@polkadot-agent-kit/llm` | AI tool integration | core, common, @langchain/core |
| `@polkadot-agent-kit/core` | Blockchain operations | common, polkadot-api, @paraspell/sdk |
| `@polkadot-agent-kit/common` | Shared utilities | polkadot-api |
| `@polkadot-agent-kit/mcp` | Model Context Protocol server | MCP server for AI assistant integration with complete Polkadot ecosystem toolset |

## System Overview 

The Polkadot Agent Kit follows a layered architecture with clear separation of concerns. The system is organized as a monorepo containing four core packages and supporting infrastructure.

### High-Level Architecture

<Frame>
  <img src="/images/high-level-system.png" style="border-radius: 0.5rem;" />
</Frame>

### Core Architecture

<Frame>
  <img src="/images/core-architecture.png" style="border-radius: 0.5rem;" />
</Frame>

---
