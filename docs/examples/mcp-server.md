---
title: MCP Server Example
description: Developer documentation for the Model Context Protocol (MCP) server using Polkadot Agent Kit
icon: 'code'  
---

# MCP Server Example with Polkadot Agent Kit

A Model Context Protocol (MCP) server that exposes Polkadot Agent Kit capabilities as tools for AI agents and LLM applications. This server enables natural language interaction with the Polkadot ecosystem through MCP-compatible clients like Claude Desktop, Cline, and other MCP tools.


## Tech Stack

| Category      | Technologies                        |
| ------------- | ----------------------------------- |
| Protocol      | [Model Context Protocol](https://modelcontextprotocol.io/) |
| Blockchain   | Polkadot Agent Kit                  |
| Language      | TypeScript                          |
| Runtime       | Node.js                             |
| Package Mgmt  | pnpm                                |


## Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd polkadot-agent-kit/examples/mcp-server
```

### 2. Install dependencies

```bash
pnpm install --ignore-workspace
```

### 3. Build the project

```bash
pnpm run build
```


## Configuration

### Environment Variables

The MCP server requires the following environment variable:

- **`PRIVATE_KEY`** (required): Your Polkadot private key for signing transactions

### MCP Client Configuration

To use this server with Claude Desktop or other MCP clients, add it to your MCP configuration file.

#### Claude Desktop Configuration

Edit your Claude Desktop configuration file (typically located at `~/Library/Application Support/Claude/claude_desktop_config.json` on macOS):

```json
{
  "mcpServers": {
    "polkadot-agent-kit": {
      "command": "node",
      "args": [
        "/absolute/path/to/polkadot-agent-kit/examples/mcp-server/dist/index.js"
      ],
      "env": {
        "PRIVATE_KEY": "your_private_key_here"
      }
    }
  }
}
```

**Important:** 
- Replace `/absolute/path/to/` with the actual absolute path to your project
- Replace `your_private_key_here` with your actual private key
- Restart Claude Desktop after making changes

#### Example Configuration

```json
{
  "mcpServers": {
    "polkadot-agent-kit": {
      "command": "node",
      "args": [
        "/Users/username/polkadot-agent-kit/examples/mcp-server/dist/index.js"
      ],
      "env": {
        "PRIVATE_KEY": "0x1234567890abcdef..."
      }
    }
  }
}
```


## Usage

### Starting the Server

The MCP server communicates via stdio (standard input/output) and is designed to be launched by MCP clients. You typically don't start it manually, but for testing:

```bash
pnpm run start
```

Or in development mode:

```bash
pnpm run dev
```

### Using with MCP Clients

Once configured, tools will be available automatically in your MCP client. You can interact with them through natural language queries.


## Project Structure

```
mcp-server/
├── index.ts              # Main server entry point
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── dist/                 # Compiled JavaScript output
```


## Key Code Snippets

### Main Server Entry Point (`index.ts`)

```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { PolkadotAgentKit, getMcpTools } from "@polkadot-agent-kit/sdk";

async function initializeServer() {
    // Create MCP server
    const server = new Server(
        {
            name: "polkadot-agent-kit",
            version: "1.0.0",
        },
        {
            capabilities: {
                tools: {},
            },
        }
    );

    // Initialize the agent kit
    const polkadotAgentKit = new PolkadotAgentKit({
        privateKey: process.env.PRIVATE_KEY!,
    });

    await polkadotAgentKit.initializeApi();

    // Get MCP tools
    const { tools, toolHandler } = await getMcpTools(polkadotAgentKit);

    // Handle tool listing
    server.setRequestHandler(ListToolsRequestSchema, async () => {
        return { tools };
    });

    // Handle tool calls
    server.setRequestHandler(CallToolRequestSchema, async (request) => {
        return await toolHandler(request.params.name, request.params.arguments);
    });

    return server;
}
```

### Server Initialization and Transport

```typescript
async function main() {
    try {
        validateEnvironment();
        const server = await initializeServer();
        const transport = new StdioServerTransport();
        await server.connect(transport);
        console.error("Polkadot Agent Kit MCP Server running on stdio");
    } catch (error) {
        console.error("Fatal error:", error);
        process.exit(1);
    }
}
```


## Example Usage with Claude Desktop

Once configured, you can interact with the Polkadot Agent Kit tools through natural language in Claude Desktop:

### Example Queries

1. **Check Balance:**
   - "Check my balance on Polkadot"
   - "What's my DOT balance?"

2. **Transfer Tokens:**
   - "Transfer 1 DOT to 5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY on Polkadot"

3. **Cross-Chain Transfer:**
   - "Transfer 0.5 DOT from Polkadot to Polkadot Asset Hub using XCM"

4. **Token Swap:**
   - "Swap 1 DOT for USDT on Polkadot Asset Hub"

5. **Staking:**
   - "Join a nomination pool with 100 DOT on Polkadot"
   - "Claim my staking rewards on Polkadot"
   - "Unbond 50 DOT from the pool on Polkadot"
---

## License

Apache-2.0



## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.



## Related Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [Claude Desktop MCP Setup](https://modelcontextprotocol.io/docs/quickstart)


For more details, see the source code in the `examples/mcp-server` file.
