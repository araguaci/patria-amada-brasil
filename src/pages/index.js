import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Typewriter from "typewriter-effect";
import "web-social-share";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.hero__title)}>
          {siteConfig.title}
        </h1>
        <h1 className={clsx("hero__subtitle", styles.hero__subtitle)}>
          {siteConfig.tagline}
        </h1>
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
      </div>
    </header>
  );
}
/*
        <div>
          <Link
            className="button button--secondary button--lg buttongradiente"
            to="/docs/1000dias">
            1000 Dias
          </Link><code>&nbsp;✠&nbsp;</code>
          <Link
            className="button button--secondary button--lg buttongradiente"
            to="/docs">
            Balanço
          </Link><code>&nbsp;✠&nbsp;</code>
          <Link
            className="button button--secondary button--lg buttongradiente"
            to="/blog">
            Destaques
          </Link>
        </div>
*/
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Melhorias e Entregas do Governo Federal"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures>
        </HomepageFeatures>
      </main>
      <div className="sharebtn">
        <div>Compartilhe:<br></br>
          <a title="Compatilhe no Whatsapp" href="https://web.whatsapp.com/send?text=P%C3%A1tria%20Amada%20Brasil%0Ahttps%3A%2F%2Fpatria-amada-brasil.vercel.app%2F"><img src="/img/BaseShare/whatsapp.svg"></img></a>
          <a title="Compatilhe no Twitter" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fpatria-amada-brasil.vercel.app%2F&text=P%C3%A1tria%20Amada%20Brasil%20"><img src="/img/BaseShare/twitter.svg"></img></a>
          <a title="Compatilhe no Facebook" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpatria-amada-brasil.vercel.app%2F"><img src="/img/BaseShare/facebook.svg"></img></a>
          <a title="Compatilhe no Linkedin" href="https://www.linkedin.com/shareArticle?mini=true&url=https://patria-amada-brasil.vercel.app/"><img src="/img/BaseShare/linkedin.svg"/></a>
          <a title="Compatilhe no Telegram" href="https://telegram.me/share/url?url=https://patria-amada-brasil.vercel.app/&text=P%C3%A1tria%20Amada%20Brasil%20"><img src="/img/BaseShare/telegram.svg"/></a>
          <a title="Compatilhe no Pinterest" href="https://pinterest.com/pin/create/button/?url=https://patria-amada-brasil.vercel.app/&media=&description=P%C3%A1tria%20Amada%20Brasil%20"><img src="/img/BaseShare/pinterest.png"/></a>
        </div>
      </div>
    </Layout>
  );
}
/*
  const share = {
    displayNames: true,
    config: [
      {
        whatsapp: {
          socialShareUrl: "https://patria-amada-brasil.vercel.app/",
        },
      },
      {
        telegram: {
          socialShareUrl: "https://patria-amada-brasil.vercel.app/",
        },
      },
      {
        facebook: {
          socialShareUrl: "https://patria-amada-brasil.vercel.app/",
        },
      },
      {
        twitter: {
          socialShareUrl: "https://patria-amada-brasil.vercel.app/",
        },
      },
      {
        pinterest: {
          socialShareUrl: "https://patria-amada-brasil.vercel.app/",
        },
      },
      {
        linkedin: {
          socialShareUrl: "https://patria-amada-brasil.vercel.app/",
        },
      },
      {
        copy: {
          socialShareUrl: "https://patria-amada-brasil.vercel.app/",
        },
      },
    ],
  };
        <web-social-share show={true} share={`${share}`}>
          <i className="fab fa-twitter" slot="twitter"></i>
        </web-social-share>
*/