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
      title="Nosso Brasil"
      description="Ações do Governo pelo Nosso Brasil"
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
                      src="https://www.youtube.com/embed/Hdgn-n1nboc"
                      title="Juntos, somos a Pátria Amada, Brasil"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                  Juntos, somos a Pátria acolhedora. A Pátria honesta. A Pátria trabalhadora.
Somos um povo que luta para se superar todos os dias. Sabemos da nossa força e nos sentimos abençoados por fazermos parte do #NossoBrasil. É por essa nação que o Governo Federal trabalha.{" "}
                  </p>{" "}
                </td>{" "}
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/3zVjcYj1LCI"
                      title="Somos a pátria acolhedora. A pátria que protege todos os brasileiros"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                  Cuidamos de quem precisa para recuperar a esperança do #NossoBrasil. É por esta nação que o Governo Federal trabalha.
 {" "}
                  </p>{" "}
                </td>{" "}
              </tr>{" "}
              <tr>
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/SBBASfIvWhM"
                      title="Somos a Pátria Trabalhadora, Brasil"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                  O Governo Federal trabalha para melhorar o Brasil. Promovendo crescimento econômico e gerando empregos para levar melhores condições de vida a todos os brasileiros. Juntos, somos a pátria que luta para se superar todos os dias. A Pátria trabalhadora, Brasil.{" "}
                  </p>{" "}
                </td>{" "} 
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/rHl7_gIIUw0"
                      title="Somos a Pátria Honesta, Brasil"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                  O Governo Federal trabalha por um Brasil mais justo. Combatendo a corrupção, os crimes ambientais e promovendo ações pela segurança de todos os brasileiros. Juntos, somos a Pátria Honesta, Brasil.{" "}
                  </p>{" "}
                </td>{" "}
              </tr>{" "}
              <tr>
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/BTQ6_DU4F-E"
                      title="1000 dias de Governo: Confira as entregas na Região Centro-Oeste"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                    O Governo Federal trabalha há 1000 dias para melhorar a vida dos brasileiros e garantir a dignidade de toda a população. Muitos foram os avanços desde o início de 2019 em todas as regiões do país.{" "}
                  </p>{" "}
                </td>{" "}
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/458-YSLh6n8"
                      title="1000 dias de Governo: Confira as entregas na Região Norte"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                  O Governo Federal trabalha há 1000 dias para melhorar a vida dos brasileiros e garantir a dignidade de toda a população. Muitos foram os avanços desde o início de 2019 em todas as regiões do país.{" "}
                  </p>{" "}
                </td>{" "}
              </tr>{" "}
              <tr>
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/NVoRChOOY14"
                      title="1000 dias de Governo: Confira as entregas na Região Nordeste"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                  O Governo Federal trabalha há 1000 dias para melhorar a vida dos brasileiros e garantir a dignidade de toda a população. Muitos foram os avanços desde o início de 2019 em todas as regiões do país.
                  </p>{" "}
                </td>{" "}
                <td>
                  <div className="video-container">
                    <iframe
                      width="300"
                      height="200"
                      src="https://www.youtube.com/embed/d8AZde01ZBg"
                      title="1000 dias de Governo: Confira as entregas na Região Sudeste"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>{" "}
                  <p>
                  O Governo Federal trabalha há 1000 dias para melhorar a vida dos brasileiros e garantir a dignidade de toda a população. Muitos foram os avanços desde o início de 2019 em todas as regiões do país.
                  </p>{" "}
                </td>{" "}
              </tr>{" "}
            </tbody>{" "}
          </table>{" "}
        </div>
        
		
        <div className="margin-bottom--lg">
          <h3 id="legacy"> Força-Tarefa das Águas  </h3>{" "}
          <p>
            ![ ](https://www.gov.br/pt-br/campanhas/nosso-brasil/forca-tarefa-das-aguas/arquivos/ft2_agua_doce.jpg)
          A Força-Tarefa das Águas é um esforço concentrado de diversos órgãos do Governo Federal para levar água de qualidade a brasileiros que moram em comunidades rurais desassistidas pelas companhias de saneamento. Desde 2019, mais de 850 mil pessoas dessas comunidades mais afastadas passaram a ter acesso diário a água por meio de equipamentos entregues pelo governo, como poços - furados ou recuperados -, pequenas estações de tratamento, equipamentos de dessalinização, e outros sistemas de abastecimento, eliminando a dependência dos carros-pipa. 

Com a Força-tarefa das Águas, o Governo Federal vai viabilizar água tratada permanente para mais de 600 mil pessoas nas regiões mais necessitadas do país, totalizando cerca de 1,5 milhão de brasileiros beneficiados até o final de 2022. 

Para atingir esse número, os ministérios do Desenvolvimento Regional, Saúde, Cidadania e Defesa; além da Codevasf, DNOCS e Funasa trabalharão com ainda mais sinergia, unindo esforços para levar saúde e qualidade de vida para quem mais precisa. {" "}
          </p>{" "}
          <table>
            <tbody>
              <tr>
                <td>
                  <Link href="https://www.gov.br/pt-br/campanhas/nosso-brasil/forca-tarefa-das-aguas/conheca-a-forca-tarefa-das-aguas">
                  <img src="https://www.gov.br/pt-br/campanhas/nosso-brasil/forca-tarefa-das-aguas/forca-tarefa-das-aguas/@@collective.nitf.backgound/ebb4540b-2f58-40c4-95a5-05853ac675c2/@@images/2681b1cb-45fc-42e2-a5ca-740387d81f8b.jpeg"></img>
                  Força Tarefa das Águas{" "}
                  </Link>{" "}
                </td>{" "}
                <td>
                  <Link href="https://www.gov.br/pt-br/campanhas/nosso-brasil/forca-tarefa-das-aguas/15-milhao-de-brasileiros-em-comunidades-rurais-terao-acesso-a-agua-ate-2022">
                  <img src="https://www.gov.br/pt-br/campanhas/nosso-brasil/forca-tarefa-das-aguas/15-milhao-de-brasileiros-em-comunidades-rurais-terao-acesso-a-agua-ate-2022/size_960_16_9_idosa-falta-agua3.jpg/@@images/c6536000-fc55-4758-af1b-69c7d42437a1.jpeg"></img>
                  R$ 4,5 bilhões para a ampliação de oferta de água no País{" "}
                  </Link>{" "}
                </td>{" "}
                <td>
                  <Link href="https://www.gov.br/pt-br/campanhas/nosso-brasil/forca-tarefa-das-aguas/forca-tarefa-das-aguas-no-ceara">
                  <img src="https://www.gov.br/pt-br/campanhas/nosso-brasil/forca-tarefa-das-aguas/forca-tarefa-das-aguas-no-ceara/agua-de-beber-agua-de-brincar-raquel-franzim-alana-foto-sasin-pixabay-800x445.jpg/@@images/208d2349-493e-4a1d-937e-db411d0a4010.jpeg"></img>
                  Força-Tarefa das Águas no Ceará{" "}
                  </Link>{" "}
                </td>{" "}
              </tr>              
            </tbody>{" "}
          </table>{" "}
        </div>{" "}
      </main>{" "}
    </Layout>
  );
}