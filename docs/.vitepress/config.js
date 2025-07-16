export default {
    title: 'Polkadot Agent Kit',
    description: 'Make world more connected with XCM.',
    base: '/docs/',
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
              { text: 'NFT Tool', link: '/tools/nft-tool' },
              { text: 'DeFi Tool', link: '/tools/defi-tool' }
            ]
          },
          {
            text: 'Examples',
            items: [
              { text: 'Telegram Bot', link: '/examples/telegram-bot' }
            ]
          }
        ]
    }
  }


