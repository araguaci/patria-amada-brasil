import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import { useColorMode } from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';

const Component = () => {
  const { isDarkTheme } = useColorMode();
  return <div>{isDarkTheme ? 'Dark' : 'Light'}</div>;
};

const FeatureList = [
  {
    title: '1000 Dias',
    Svg: require( '../../static/img/1000diasv.svg').default,
    to: "/docs/1000dias",
    tolabel: "Ver Resultados",
    description: (
      <> 
        Obras realizadas pelo Governo Federal em 1000 dias de Governo.
      </>
    ),
  },
  {
    title: 'Entregas',
    to: "/docs",
    tolabel: "Ver Entregas",
    Svg: require( '../../static/img/balanco-governo-avaliacao.svg').default,
    description: (
      <>
        Principais Entregas e Balanço do Governo do Presidente Bolsonaro.
      </>
    ),
  },
  {
    title: 'Destaques',
    to: "/blog",
    tolabel: "Ver Destaques",
    Svg: require('../../static/img/balanco-governo-grafico.svg').default,
    description: (
      <>
        Resultados positivos que nem sempre tem repercursão na imprensa.
      </>
    ),
  },
];

function Feature({Svg, to, tolabel, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="text--center marginButton">
          <Link
              className="button button--primary button--lg buttongradiente"
              to={to}>
              {tolabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
