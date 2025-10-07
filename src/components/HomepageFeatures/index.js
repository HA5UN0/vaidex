import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [

  // Welcome Card
  {
    title: 'Welcome to Vaidex',
    Svg: require('@site/static/img/bpsr3.svg').default,
    description: (
      <>
        A living game universe built by fans, for fans — where knowledge, creativity, and adventure converge.
      </>
    ),
  },
  // wiki hub Card
/*   {
    title: 'Explore the Wiki',
    Svg: require('@site/static/img/p4g-chie.svg').default,
    description: (
      <>
        explore the wiki
        <br>
        </br>
        <Link to="/blog">
        Check out my blog!
        </Link>
      </>x
    ),
  }, */
  // About Card -----------------------------------
  {
    title: 'About VaiDex',
    Svg: require('@site/static/img/bpsr3.svg').default,
    description: (
      <>
        VaiDex is an independent fan-driven wiki and data hub dedicated to connecting players through shared knowledge, creativity, and discovery.
        Created by <strong>ha5un0</strong>, this project aims to document and celebrate games that inspire exploration and community.
        Every bit of support on Ko-fi helps fund hosting, design, and future tools that make this universe possible.
{/*         <Link
            className="button button--secondary button--lg"
            to="/docs/about">
            About
        </Link> */}
      </>
    ),
  },
  // Featured Games Card -----------------------------------
  {
    title: 'Featured Games',
    Svg: require('@site/static/img/bpsr3.svg').default,
    description: (
      <>
        here are the current games and there status
        <br>
        </br>
        <h3 className="text-lg font-medium text-pink-400">
          <Link to="/docs/skies-of-arcadia/soa-hub">
            Skies of Arcadia
          </Link>
        </h3>
         <p className="text-gray-400 text-sm">Status: Active! Building</p>
 

         <h3 className="text-lg font-medium text-pink-400">Blue Protocol Star Resonance</h3>
         <p className="text-gray-400 text-sm">Status: Coming Soon</p>
         <h3 className="text-lg font-medium text-pink-400">Honkai Nexus Anima</h3>
         <p className="text-gray-400 text-sm">Status: Coming Soon</p>
        <br>
        </br>
{/*         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {["Blue Protocol Star Resonance", 
          "Honkai Nexus Anima", 
          "Skies of Arcadia", 
          "Mass Effect: Legendary Edition", 
          "Persona Series"].map((game) => (
            <div key={game} className="bg-[#222] p-4 rounded-xl shadow-md text-center hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-pink-400">{game}</h3>
            <p className="text-gray-400 text-sm">Coming Soon</p>
        </div>
        ))}
        </div> */}
      </>
    ),
  },
  // Support Section Card -----------------------------------
  {
    title: 'Join & Support',
    Svg: require('@site/static/img/p4g-chie.svg').default,
    description: (
      <>
        Become part of the growing VaiDex community — your support helps shape the wiki, fund new features, and expand to more titles.
        <br></br>
        <Link to="https://ko-fi.com/ha5un0">
          Support on Ko-fi
        </Link>
      </>
    ),
  },

];




function Feature({Svg, title, description, }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
