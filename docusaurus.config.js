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
          docId: 'index',
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
              label: 'Ministério da Agricultura',
              to: '/docs/agricultura',
            },
            {
              label: 'Ministério da Infraestrutura',
              to: '/docs/infraestrutura',
            },
            {
              label: 'Ministério do Turismo',
              to: '/docs/turismo',
            },
            {
              label: 'Principais Entregas',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Informações',
          items: [
            {
              label: 'Sobre o Projeto',
              href: '/docs/intro',
            },
            {
              label: 'Criação e Design',
              href: 'http://www.artesdosul.com/',
            },
            {
              label: 'Colabore com um Cafezinho',
              href: 'https://www.buymeacoffee.com/araguaci',
            },
          ],
        },
        {
          title: 'Outros Projetos',
          items: [
            {
              label: 'Brasil Pela Liberdade',
              href: 'https://brasil-pela-liberdade.vercel.app/',
            },
            {
              label: 'Jornada Seja Grato',
              href: 'https://jornada-seja-grato-araguaci.vercel.app/',
            },
            {
              label: 'Pela Paz na Terra',
              href: 'http://gaia.artesdosul.com/',
            },
          ],
        },
      ],
      copyright: `✠ Projeto Voluntário ✠ © ${new Date().getFullYear()} Artes do Sul ✠ Brasil Acima de Tudo ✠ DEUS ACIMA DE TODOS ✠`,
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
          editLocalizedFiles: false,
          editCurrentVersion: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
