export default {
    title: 'Polkadot Agent Kit',
    description: 'Make agent more simple',
    base: '/agent-docs/',
    head: [],
    themeConfig: {
        logo: '/ai_logo.png',

        nav: [
          { text: 'Home', link: '/' },
          { text: 'Support', link: 'https://github.com/elasticlabs-org/polkadot-agent-kit' },
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/elasticlabs-org/polkadot-agent-kit' },
            { icon: 'twitter', link: 'https://x.com/polkadot_ai' },
        ],

        sidebar: [
          {
            text: 'Get Started',
            items: [
              { text: 'Introduction', link: '/index' },
              { text: 'Quickstart', link: '/quickstart' }
            ]
          },
          {
            text: 'Tools',
            items: [
              { text: 'Token Tool', link: '/tools/token-tool' },
              { text: 'XCM Tool', link: '/tools/xcm-tool' },
              { text: 'DeFi Tool', link: '/tools/defi-tool' },
              { text: 'Nomination Staking Tool', link: '/tools/nomination-staking-tool' },
              { text: 'Bifrost Tool', link: '/tools/bifrost-tool' }
            ]
          },
          {
            text: 'Examples',
            items: [
              { text: 'Telegram Bot', link: '/examples/telegram-bot' },
              { text: 'MCP', link: '/examples/mcp-server' },
              { text: 'Polkadot Agent Playground', link: '/examples/playground' }
            ]
          }
        ]
    }
  }


