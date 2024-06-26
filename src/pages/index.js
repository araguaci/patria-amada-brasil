import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageShare from "@site/src/components/HomepageShare";
import Typewriter from "typewriter-effect";

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

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  /** {`${siteConfig.title}`} */
  return (
    <Layout
      title="Melhorias e Entregas Governo Pátria Amada Brasil"
      description="Um novo Brasil de resultados e melhorias acontecendo que não é mostrado na imprensa"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
		<div
          className="container"
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          <iframe
            width="640"
            height="480"
            src="https://www.youtube.com/embed/BmTpssbukJk"
            title="Dentro das 4 Linhas"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <HomepageShare />
      </main>
    </Layout>
  );
}
