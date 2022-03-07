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
          <table className="page_table">
            <tbody>
              <tr>
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/i23okycZGHc"
                      title="300 mil moradias entregues em cerca de 3 anos"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                    São mais de 300 mil moradias entregues em cerca de 3 anos e
                    mais de 1 milhão de pessoas alcançadas com a casa própria.{" "}
                  </p>{" "}
                </td>{" "}
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/Wq9zn1AR3fY"
                      title="18 milhões de alcançados pelo Auxilio - Brasil"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                    Auxilio - Brasil, 18 milhões alcançados recebem, no mínimo, R$ 400 e estímulo
                    para volta ao mercado de trabalho. {" "}
                  </p>{" "}
                </td>{" "}
              </tr>{" "}
              <tr>
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/OIGo7rYh_pk"
                      title="Conheça a Verdade sobre a Transposição do São Francisco"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                    Conheça a Verdade sobre a Transposição do São Francisco.{" "}
                  </p>{" "}
                </td>{" "} 
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/azyfNvN_YIA"
                      title="Só o povo nordestino sabe da importância"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                    Só o povo nordestino sabe da importância. Antes promessas, agora, resultados.{" "}
                  </p>{" "}
                </td>{" "}
              </tr>{" "}
              <tr>
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/n9f82hnk4kg"
                      title="Impostos reduzidos pelo Governo Federal"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                    <Link href="/docs/tributos-reduzidos">
                    Impostos reduzidos pelo Governo Federal{" "}
                  </Link>{" "} em 2019, 2020, 2021 e 2022.{" "}
                  </p>{" "}
                </td>{" "}
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/PBURNTjgL2E"
                      title="Nova concessão da Dutra/Rio-Santos (BR-101/116/RJ/SP)"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                  R$10 bilhões de investimentos, menor valor do pedágio com a maior e mais moderna concessão rodoviária do Brasil,mais de 220 mil empregos.
                  <Link href="/docs/infraestrutura">
                    Veja mais em infraestrutura...{" "}
                  </Link>{" "}
                  </p>{" "}
                </td>{" "}
              </tr>{" "}
            </tbody>{" "}
          </table>{" "}
        </div>
		
		https://www.youtube.com/watch?v=mxwrcoYWy3I
		Regularização Fundiária: em 2021, o INCRA emitiu mais de 137 mil títulos. A meta do ano era 130 mil.
		
		https://www.youtube.com/watch?v=zATLLew8qBk
		O Senhor Jhow chegou em Brasília em 1993. Tratorista, pedreiro, cabeleireiro. Foi impactado pelo "fecha-tudo" imposto por governadores e prefeitos, mas, com o Auxílio Emergencial do Governo Federal, Jhow não apenas manteve a dignidade e a esperança, comotambém pôde empreender, abrindo sua barbearia.
		
        <div className="margin-bottom--lg">
          <h3 id="legacy"> Legacy  </h3>{" "}
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
