---
title: Telegram Bot Example
description: Developer documentation for the Telegram bot using Polkadot Agent Kit
icon: 'code'  
---

# Telegram Bot Example with Polkadot Agent Kit

A modern Telegram bot that interacts with the Polkadot ecosystem using the Polkadot Agent Kit, supporting native and XCM token transfers, balance checks, and more—all via natural language commands.

---

## Features

- **Native Token Transfers:** Send tokens on supported chains (e.g., Westend, Polkadot, Kusama).
- **XCM Transfers:** Cross-chain token transfers using XCM.
- **Balance Checks:** Query the agent's balance on any supported chain.
- **LLM Integration:** Uses OpenAI (if API key provided) or Ollama for natural language understanding.

---

## Tech Stack

| Category      | Technologies                        |
| ------------- | ----------------------------------- |
| Bot Framework | [Telegraf](https://telegraf.js.org/) |
| Blockchain    | Polkadot Agent Kit                  |
| LLM Support           | OpenAI, Ollama, LangChain           |
| Language      | TypeScript                          |
| Utilities     | dotenv                              |
| Package Mgmt  | pnpm                                |

---

## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd polkadot-agent-kit/examples/telegram-bot
```

### 2. Install dependencies

```bash
pnpm install --ignore-workspace
```

### 3. Set up environment variables

Create a `.env` file in the project root:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
PRIVATE_KEY=your_agent_private_key
OPENAI_API_KEY=your_openai_api_key   # Optional, for OpenAI LLM
```

### 4. Start the bot

```bash
pnpm run dev
```

---

## Project Structure

```
src/
├── handlers.ts      # Telegram message handlers and LLM integration
├── index.ts         # Entry point, loads env and starts the bot
├── models.ts        # LLM provider abstraction (OpenAI or Ollama)
├── TelegramBot.ts   # Main bot class, agent and LLM setup
```

---

## Example Usage

After starting the bot:
1. Open Telegram and search for your bot by username.
2. Start a chat and use commands like:
   - `transfer 1 DOT to <address> on polkadot`
   - `check balance on polkadot`
   - `transfer 0.1 DOT to <address> from polkadot to polkadot_asset_hub`
   - `check proxies on polkadot`
   - Use `/help` or `/start` for instructions.

---

## Key Code Snippets

### Entry Point (`src/index.ts`)

```ts
import { TelegramBot } from "./TelegramBot";
import * as dotenv from "dotenv";
dotenv.config();

async function runBot() {
  const bot = new TelegramBot({
    botToken: process.env.TELEGRAM_BOT_TOKEN!,
    openAiApiKey: process.env.OPENAI_API_KEY!,
    privateKey: process.env.PRIVATE_KEY!,
  });

  await bot.start();

  process.once("SIGINT", () => bot.stop());
  process.once("SIGTERM", () => bot.stop());
}

runBot();
```

### Main Bot Class (`src/TelegramBot.ts`)

```ts
import { Telegraf } from "telegraf";
import { setupHandlers } from "./handlers";
import { PolkadotAgentKit } from "@polkadot-agent-kit/sdk";
import { ChatModelFactory, ChatModelOptions, ChatModelWithTools } from "./models";

export class TelegramBot {
  // ...constructor and LLM setup omitted for brevity

  async initialize() {
    await this.agent.initializeApi();
    const checkBalance = this.agent.getNativeBalanceTool();
    const transferNative = this.agent.transferNativeTool();
    const xcmTransferNativeAsset = this.agent.xcmTransferNativeTool();

    setupHandlers(this.bot, this.llm, {
      checkBalance,
      transferNative,
      xcmTransferNativeAsset,
    });
  }

  public async start(): Promise<void> {
    await this.initialize();
    await this.bot.launch();
  }

  public async stop(): Promise<void> {
    await this.agent.disconnect();
    this.bot.stop();
  }
}
```

### Handler Setup (`src/handlers.ts`)

```ts
import { Telegraf } from "telegraf";
import { HumanMessage, SystemMessage } from "@langchain/core/messages";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { ChatModelWithTools } from "./models";

// SYSTEM_PROMPT omitted for brevity

export function setupHandlers(
  bot: Telegraf,
  llm: ChatModelWithTools,
  toolsByName: Record<string, DynamicStructuredTool>,
): void {
  bot.start((ctx) => {
    ctx.reply(
      "Welcome to Polkadot Bot!\n" +
        "I can assist you with:\n" +
        '- Transferring native tokens  (e.g., "transfer 1 token to westend_asset_hub to <address>")\n' +
        '- Checking balance (e.g., "check balance on west/polkadot/kusama")\n' +
        '- Checking proxies (e.g., "check proxies on westend" or "check proxies")\n' +
        '- Transfer tokens through XCM (e.g., "transfer 1 WND to <address> from west to west_asset_hub ")\n' +
        "Try asking something!",
    );
  });

  bot.on("text", async (ctx) => {
    // ...LLM and tool call logic
  });

  bot.catch((err, ctx) => {
    ctx.reply("An error occurred. Please try again.");
  });
}
```

### LLM Model Factory (`src/models.ts`)

```ts
import { BaseChatModel } from "@langchain/core/language_models/chat_models";
import { ChatOpenAI } from "@langchain/openai";
import { ChatOllama } from "@langchain/ollama";

export class ChatModelFactory {
  static create(options: ChatModelOptions): ChatModelWithTools {
    // ...implementation
  }
}
```

---

## Customization & Extension

- **LLM Provider:** Uses OpenAI if `OPENAI_API_KEY` is set, otherwise falls back to Ollama.
- **Chain Support:** Update the agent configuration to support additional chains as needed.
- **Extend Commands:** Add new tools or handlers in `handlers.ts` to support more blockchain operations.

---

## Scripts

| Command         | Description                |
| --------------- | ------------------------- |
| pnpm run dev    | Start the bot (dev mode)  |
| pnpm run build  | Compile TypeScript        |
| pnpm run lint   | Lint the codebase         |
| pnpm run format | Format the codebase       |

---

## Troubleshooting

- Ensure all environment variables are set.
- If using OpenAI, ensure your API key is valid and has quota.
- For Ollama, ensure it is running locally.
- Check logs for errors during startup or message handling.

---

## License

MIT

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

For more details, see the source code in the `src/` directory. 