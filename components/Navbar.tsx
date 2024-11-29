"use client"; 

import React from 'react'
import SparklesText from './ui/sparkles-text'
import Head from 'next/head'
import Search from './Search'

export default function Navbar() {
  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="relative z-10 pt-10 pl-8">
        <SparklesText text="Article Summarizer" />
        <h2 style={{ fontFamily: 'Quicksand, sans-serif' }} className="text-gray-300 text-4xl pt-[50px]">
          Enhance your reading experience with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-400 from-red-500">
            Stellar
          </span>
          , an innovative open-source article summarizer.
        </h2>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
}
