import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Typewriter from "typewriter-effect";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
      <h1 className={clsx("hero__title", styles.hero__title)}>{siteConfig.title}</h1>
        <h1 className={clsx("hero__subtitle", styles.hero__subtitle)}>{siteConfig.tagline}</h1>
        <div className={clsx("hero__subtitle", styles.hero__subtitle)}>
          <h1 className="greeting-text">
            <Typewriter
              options={{
                strings: [
                  "Cansado de ver notícias ruins...",
                  "Resolvi procurar por conta própria...",
                  "Descobri um Brasil que não é mostrado...",
                  "Temos muitas melhorias em 3 anos de um novo Brasil...",
                  "Siga o link Entregas do Governo...",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 10,
                cursor: "<",
                delay: 100,
              }}
            />
          </h1>
        </div>
        <div>
          <Link
            className="button button--secondary button--lg buttongradiente"
            to="/docs/1000dias">
            1000 Dias
          </Link><code>&nbsp;✠&nbsp;</code>
          <Link
            className="button button--secondary button--lg buttongradiente"
            to="/docs/balanco-do-governo">
            Balanço
          </Link><code>&nbsp;✠&nbsp;</code>
          <Link
            className="button button--secondary button--lg buttongradiente"
            to="/blog">
            Destaques
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Entregas do Governo Federal Pátria Amada Brasil <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
