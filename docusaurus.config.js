const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pátria Amada Brasil',
  tagline: 'Entregas do Governo Federal',
  url: 'https://brasil-pela-liberdade.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'araguaci', // Usually your GitHub org/user name.
  projectName: 'patria-amada-brasil', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Pátria Amada Brasil',
      logo: {
        alt: 'Entregas do Governo Federal',
        src: 'img/brasil.png',
        srcDark: 'img/brasil.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Entregas do Governo',
        },
        {to: '/blog', label: 'Notícias', position: 'left'},
        {
          href: 'http://www.artesdosul.com/',
          label: 'artesdosul',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: '1000 dias de Governo',
              to: '/docs/1000dias',
            },
            {
              label: 'Balanço de 3 Anos de Governo ',
              to: '/docs/balanco-do-governo',
            },
            {
              label: 'Ministério da Agricultura',
              to: '/docs/agricultura/principais-entregas',
            },
            {
              label: 'Ministério da Infraestrutura',
              to: '/docs/infraestrutura/principais-entregas',
            },
            {
              label: 'Ministério do Turismo',
              to: '/docs/turismo/principais-entregas',
            },
            {
              label: 'Entregas do Governo',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Contato',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'Compartilhando',
          items: [
            {
              label: 'Notícias',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `✠ Projeto Voluntário © ${new Date().getFullYear()} Artes do Sul ✠ Brasil Acima de Tudo ✠ DEUS ACIMA DE TODOS ✠`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
