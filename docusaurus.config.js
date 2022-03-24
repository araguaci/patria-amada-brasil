const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Pátria Amada Brasil',
    tagline: 'Entregas do Governo Federal',
    url: 'https://patria-amada-brasil.vercel.app/',
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
            items: [{
                    type: 'search',
                    position: 'right',
                },
                {
                    type: 'doc',
                    docId: 'index',
                    position: 'left',
                    label: '🎯Entregas do Governo',
                },
                { to: '/blog', label: '⚡️Destaques', position: 'left' },
                { to: '/mais-brasil', label: '💚Mais Brasil', position: 'left' },
                { to: '/nosso-brasil', label: '💛Nosso Brasil', position: 'left' },
                {
                    href: 'https://www.patreon.com/artesdosul',
                    label: 'Patreon',
                    position: 'right',
                },
                {
                    href: 'http://www.artesdosul.com/',
                    label: 'Artes do Sul',
                    position: 'right',
                },
            ],
        },
        footer: {            
            style: 'dark',
            logo: {
                alt: 'Pátria Amada Brasil',
                src: 'img/brasila.svg',
                href: '/',
            },
            links: [{
                    title: 'Entregas por Órgãos do Governo',
                    items: [{
                            label: '⚡️ 1000 dias de Governo',
                            to: '/docs/1000dias',
                        },
                        {
                            label: '⚡️ Principais Entregas',
                            to: '/docs',
                        },
                        {
                            label: '⚡️ Redução de Tributos',
                            to: '/docs',
                        },
                        {
                            label: '⚡️ Ministério da Agricultura',
                            to: '/docs/agricultura',
                        },
                        {
                            label: '⚡️ Ministério da Ciência e Tecnologia',
                            to: '/docs/ciencia-tecnologia/entregas',
                        },                        
                        {
                            label: '⚡️ Ministério de Desenvolvimento Regional',
                            to: '/docs/desenvolvimento-regional',
                        },
                        {
                            label: '⚡️ Ministério da Economia',
                            to: '/docs/economia',
                        },
                        {
                            label: '⚡️ Ministério da Infraestrutura',
                            to: '/docs/infraestrutura',
                        },
                        {
                            label: '⚡️ Ministério do Turismo',
                            to: '/docs/turismo',
                        },                        
                    ],
                },
                {
                    title: 'Informações',
                    items: [{
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
                        {
                            label: 'Incentive Outros Projetos',
                            href: 'https://www.patreon.com/artesdosul',
                        },
                    ],
                },
                {
                    title: 'Outros Projetos',
                    items: [{
                            label: 'Brasil Pela Liberdade',
                            href: 'https://brasil-pela-liberdade.vercel.app/',
                        },
                        {
                            label: 'S.O.S. Terra',
                            href: 'https://healing-sound-of-the-earth.vercel.app/',
                        },
                        {
                            label: 'Pela Paz na Terra',
                            href: 'http://gaia.artesdosul.com/',
                        },
                        {
                            label: 'Jornada Seja Grato',
                            href: 'https://jornada-seja-grato-araguaci.vercel.app/',
                        },
                    ],
                },
            ],
            
            copyright: `<p><b>Pátria Amada Brasil - Um novo Brasil de resultados e melhorias acontecendo que não é mostrado na imprensa.</b></p>✠ Projeto Voluntário ✠ © ${new Date().getFullYear()} Artes do Sul ✠ Brasil Acima de Tudo ✠ DEUS ACIMA DE TODOS ✠`,
        },
        metadata: [{ name: 'twitter:card', content: 'Pátria Amada Brasil - Um novo Brasil de resultados e melhorias acontecendo que não é mostrado na imprensa.' }],
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
                blog: {
                    path: 'blog',
                    // Simple use-case: string editUrl
                    // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
                    // Advanced use-case: functional editUrl
                    //editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
                    //  `https://github.com/facebook/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`,
                    editLocalizedFiles: false,
                    blogTitle: 'Principais Destaques',
                    blogDescription: 'Blog',
                    blogSidebarCount: 20,
                    blogSidebarTitle: 'Principais Destaques',
                    routeBasePath: 'blog',
                    include: ['**/*.{md,mdx}'],
                    exclude: [
                        '**/_*.{js,jsx,ts,tsx,md,mdx}',
                        '**/_*/**',
                        '**/*.test.{js,jsx,ts,tsx}',
                        '**/__tests__/**',
                    ],
                    postsPerPage: 10,
                    blogListComponent: '@theme/BlogListPage',
                    blogPostComponent: '@theme/BlogPostPage',
                    blogTagsListComponent: '@theme/BlogTagsListPage',
                    blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
                    rehypePlugins: [],
                    beforeDefaultRemarkPlugins: [],
                    beforeDefaultRehypePlugins: [],
                    truncateMarker: /<!--s*(truncate)s*-->/,
                    showReadingTime: true,
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
                googleAnalytics: {
                    trackingID: 'UA-8107284-1',
                    anonymizeIP: true,
                }
            },
        ],
    ],
};