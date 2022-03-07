import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

export default function MaisBrasil() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Mais Brasil"
      description="Um novo Brasil de resultados e melhorias acontecendo que não é mostrado na imprensa"
    >
      <main className="container margin-vert--lg">
        <h2 className={clsx("hero__subtitle", styles.gradient_title)}>
          {" "}
          {siteConfig.tagline}{" "}
        </h2>{" "}
        <div className="margin-bottom--lg">
          <table>
            <tbody>
              <tr>
                <td>
                  <div className="video-container">
                    <iframe
                      width="350"
                      height="200"
                      src="https://www.youtube.com/embed/i23okycZGHc"
                      title="Pátria Amada Brasil"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                </td>{" "}
                <td>
                  <p>
                    São mais de 300 mil moradias entregues em cerca de 3 anos e
                    mais de 1 milhão de pessoas alcançadas com a casa própria.{" "}
                  </p>{" "}
                </td>{" "}
              </tr>{" "}
              <tr>
                <td>
                  <div className="video-container">
                    <iframe
                      width="350"
                      height="200"
                      src="https://www.youtube.com/embed/Wq9zn1AR3fY"
                      title="Pátria Amada Brasil"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                </td>{" "}
                <td>
                  <p>
                    Diante das catastróficas imposições de governadores
                    impedindo, inclusive que os mais humildes coloquem comida na
                    mesa de sua casa, o Governo Federal agiu e trouxe o auxílio
                    emergencial, impendindo tragédia ainda maior.Hoje, com o
                    Auxilio - Brasil, novas oportunidades surgem aos mais
                    necessitados.São 18 milhões de alcançados pelo programa do
                    Governo Federal que recebem, no mínimo, R$ 400 e estímulo
                    para volta ao mercado de trabalho. {" "}
                  </p>{" "}
                </td>{" "}
              </tr>{" "}
              <tr>
                <td>
                  <div className="video-container">
                    <iframe
                      width="350"
                      height="200"
                      src="https://www.youtube.com/embed/OIGo7rYh_pk"
                      title="Pátria Amada Brasil"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                </td>{" "}
                <td>
                  <p>
                    Conheça a Verdade sobre a Transposição do São Francisco.{" "}
                  </p>{" "}
                </td>{" "}
              </tr>{" "}
              <tr>
                <td>
                  <div className="video-container">
                    <iframe
                      width="350"
                      height="200"
                      src="https://www.youtube.com/embed/azyfNvN_YIA"
                      title="Pátria Amada Brasil"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                </td>{" "}
                <td>
                  <p>
                    Só o povo nordestino sabe da importância. As promessas são muitas, em todos os anos vemos isto em todas as prefeituras, os resultados dificilmente apareciam, mas estamos vendo agora.{" "}
                  </p>{" "}
                </td>{" "}
              </tr>{" "}
              <tr>
                <td>
                  <div className="video-container">
                    <iframe
                      width="350"
                      height="200"
                      src="https://www.youtube.com/embed/n9f82hnk4kg"
                      title="Pátria Amada Brasil"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                </td>{" "}
                <td>
                  <p>
                    Impostos reduzidos pelo Governo Federal
                    <Link href="/docs/tributos-reduzidos">
                    Link{" "}
                  </Link>{" "} em 2019, 2020, 2021 e 2022.{" "}
                  </p>{" "}
                </td>{" "}
              </tr>{" "}
            </tbody>{" "}
          </table>{" "}
        </div>
        <div className="margin-bottom--lg">
          <h3 id="legacy"> Legacy </h3>{" "}
          <p>
            Here you can find documentation for legacy version of Docusaurus.{" "}
          </p>{" "}
          <table>
            <tbody>
              <tr>
                <th> 1. x </th>{" "}
                <td>
                  <Link href="https://v1.docusaurus.io/docs/en/installation">
                    Link{" "}
                  </Link>{" "}
                </td>{" "}
              </tr>{" "}
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
      </main>{" "}
    </Layout>
  );
}
