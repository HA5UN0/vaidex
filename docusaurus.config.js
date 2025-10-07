// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';


// MASTER LINK GO HERE ----------------------------
const HUB_LINKS = {
  bp: '/docs/blue-protocol/bpsr-hub',
  hna: '/docs/honkai-nexus-anima/hna-hub',
  me: '/docs/mass-effect/mass-effect-hub',
/*   me1: '/docs/mass-effect/mass-effect1',
  me2: '/docs/mass-effect/mass-effect2',
  me3: '/docs/mass-effect/mass-effect3', */
  soa:'/docs/skies-of-arcadia/soa-hub',
/*   sona:'/docs/persona/persona-hub',
  sona3:'/docs/persona/persona3',
  sona4:'/docs/persona/persona4',
  sona5:'/docs/persona/persona5', */
};


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VaiDex',
  tagline: 'A living game universe built by fans, for fans — where knowledge, creativity, and adventure converge.',
  favicon: 'img/favicon3.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://vaidex.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Vaidex',
        logo: {
          alt: 'Vaidex Logo',
          src: 'img/vaidex-logo-base.png',
        },
        // nav items below -------------------------
        items: [

          // skies or arcadia
          {
            type: 'docSidebar',
            sidebarId: 'soaSidebar',
            position: 'left',
            label: 'Skies of Arcadia',
          },

          // ---------- all games dropdown ----------------
          {
              label: "All Games",
              position: "left",
              items: [
                  { label: "Blue Protocol", to: HUB_LINKS.bp },
                  { label: "Honkai Nexus Anima", to: HUB_LINKS.hna },
                  { label: "Skies of Arcadia", to: HUB_LINKS.soa },
                  { label: "Mass Effect", to: HUB_LINKS.me },
                  { label: "Persona Remakes", to: HUB_LINKS.sona },
              ],
          },
/* 
          // blue protocol
          {
            type: 'docSidebar',
            sidebarId: 'bpSidebar',
            position: 'left',
            label: 'Blue Protocol',
          },

          // honkai nexus anima
          {
            type: 'docSidebar',
            sidebarId: 'hnaSidebar',
            position: 'left',
            label: 'Honkai Nexus Anima',
          },

          // mass effect
          {
            type: 'docSidebar',
            sidebarId: 'meSidebar',
            position: 'left',
            label: 'Mass Effect',
          },

          // persona
          {
            type: 'docSidebar',
            sidebarId: 'phubSidebar',
            position: 'left',
            label: 'Persona',
          },
 */
          // blog
          {to: '/blog', label: 'Blog', position: 'left'},

          // kofi
          {
            href:"https://ko-fi.com/ha5un0",
            label: 'Support us on Ko-fi',
            position: 'right',
            className: 'header-kofi-link', // for custom styling
            'aria-label': 'kofi support',

          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Games',
            items: [
              {
                label: 'Skies of Arcadia',
                to: '/docs/skies-of-arcadia',
              },
              {
                label: 'Blue Protocol',
                to: '/docs/blue-protocol',
              },
              {
                label: 'Honkai Nexus Anima',
                to: '/docs/honkai-nexus-anima',
              },
              {
                label: 'Mass Effect',
                to: '/docs/mass-effect',
              },
              {
                label: 'Persona',
                to: '/docs/persona',
              },
            ],
          },

          // more new dex plus

          {
            title: 'More',
            items: [
              {
                label: 'About',
                to: '/About',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'Support on Ko-fi',
                href: 'https://ko-fi.com/ha5un0',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VaiDex — Created by ha5un0 | All Rights Reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
