import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import React from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
                      <img
            src="/img/vaidex-logo-base.png"
            alt="VaiDex Logo"
            className="mx-auto w-32 h-32 mb-6"
          />
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/skies-of-arcadia/Characters/crew/all-crew-members">
            Skies of Arcadia
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
      title={`Welcome to ${siteConfig.title}`}
      description="A living game universe built by fans, for fans — where knowledge, creativity, and adventure converge. <head />"
      >
      <HomepageHeader />
      <main className="container mx-auto">
        {/* The 'HomepageFeatures' component is optional. Keep or remove as desired. */}
        {/* <HomepageFeatures /> */}

        {/* This is the welcome section that appears below the hero banner. 
            The content is centered within its own flex container. */}
        <section className="text-center py-16">
          <img
            src="/img/vaidex-logo-base.png"
            alt="VaiDex Logo"
            className="mx-auto w-32 h-32 mb-6"
          />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-red-400 to-purple-500 bg-clip-text text-transparent">
            Welcome to VaiDex
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            A living game universe built by fans, for fans — where knowledge, creativity, and adventure converge.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition"
              to="/wiki"
            >
              Explore the Wiki
            </Link>
            <Link
              className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition"
              to="https://ko-fi.com/ha5un0"
            >
              Support on Ko-fi
            </Link>
          </div>
        </section>

        {/* Consolidated About Section. The max-w-3xl class limits the width, and mx-auto centers it. */}
        <section className="max-w-3xl mx-auto text-center py-12">
          <h2 className="text-3xl font-semibold mb-4">About VaiDex</h2>
          <p className="text-gray-400">
            VaiDex is an independent fan-driven wiki and data hub dedicated to connecting players through shared knowledge, creativity, and discovery. 
            Created by <strong>ha5un0</strong>, this project aims to document and celebrate games that inspire exploration and community. 
            Every bit of support on Ko-fi helps fund hosting, design, and future tools that make this universe possible.
          </p>
        </section>

        {/* Featured Games. Content is centered using mx-auto on the grid container. */}
        <section className="py-16 bg-[#1a1a1a]">
          <h2 className="text-center text-3xl font-semibold mb-8">Featured Games</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {["Blue Protocol", "Star Resonance", "Honkai", "Nexus Anima", "Skies of Arcadia", "Mass Effect: Legendary Edition", "Persona Series"].map((game) => (
              <div key={game} className="bg-[#222] p-4 rounded-xl shadow-md text-center hover:shadow-lg transition">
                <h3 className="text-lg font-medium text-pink-400">{game}</h3>
                <p className="text-gray-400 text-sm">Coming Soon</p>
              </div>
            ))}
          </div>
        </section>

        {/* Support Section is centered because of the parent container class. */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-semibold mb-4">Join & Support</h2>
          <p className="text-gray-400 mb-6">
            Become part of the growing VaiDex community — your support helps shape the wiki, fund new features, and expand to more titles.
          </p>
          <Link
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition"
            to="https://ko-fi.com/ha5un0"
          >
            Support on Ko-fi
          </Link>
        </section>

      </main>
    </Layout>
  );
}
