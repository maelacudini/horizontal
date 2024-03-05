import { Fragment } from "react";
import Head from "next/head";
import Hero from "@/components/work/hero/Hero";
import Projects from "@/components/work/projects/Projects";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Work",
  description:
    "Explore our portfolio showcasing visionary designs crafted by our architecture agency in Oslo and beyond.",
  url: "https://horizontal-ten.vercel.app/work",
};

export default function Work() {
  return (
    <Fragment>
      <Head>
        <title>Work</title>

        <link rel="icon" href="/icon.svg" />

        <meta
          name="description"
          content="Crafting visionary designs in Oslo and beyond. Our architecture agency blends Scandinavian minimalism with innovative solutions. Discover our portfolio today."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="application-name" content="Next.js" />
        <meta name="author" content="Maela" />
        <link rel="author" href="https://maelacudini.com" />
        <meta name="generator" content="Next.js" />
        <meta name="keywords" content="Next.js,React,JavaScript" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="color-scheme" content="light" />
        <meta name="creator" content="Maela" />
        <meta name="publisher" content="Maela" />
        <meta
          name="format-detection"
          content="telephone=no, address=no, email=no"
        />
        <link rel="canonical" href="https://horizontal-ten.vercel.app/work" />
        <link
          rel="alternate"
          hrefLang="en-US"
          href="https://horizontal-ten.vercel.app/en-US"
        />

        <meta property="og:title" content="Work" />
        <meta
          property="og:description"
          content="Crafting visionary designs in Oslo and beyond. Our architecture agency blends Scandinavian minimalism with innovative solutions. Discover our portfolio today."
        />
        <meta
          property="og:url"
          content="https://horizontal-ten.vercel.app/work"
        />
        <meta property="og:site_name" content="Horizontal" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:image:url"
          content="https://horizontal-ten.vercel.app/card.png"
        />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta
          property="og:image:alt"
          content="Horizontal Architecture Agency"
        />
        <meta property="og:type" content="website" />

        <meta name="robots" content="noindex, nofollow, nocache" />
        <meta
          name="googlebot"
          content="noindex, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />

        <link rel="shortcut icon" href="/icon.svg" />
        <link rel="icon" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
        <link rel="apple-touch-icon-precomposed" href="/icon.svg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:id" content="00000000000" />
        <meta name="twitter:creator" content="@no-one" />
        <meta name="twitter:creator:id" content="00000000000" />
        <meta name="twitter:title" content="Work" />
        <meta
          name="twitter:description"
          content="Crafting visionary designs in Oslo and beyond. Our architecture agency blends Scandinavian minimalism with innovative solutions. Discover our portfolio today."
        />
        <meta
          name="twitter:image"
          content="https://horizontal-ten.vercel.app/card.png"
        />

        <meta name="theme-color" content="white" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Hero />
      <Projects />
    </Fragment>
  );
}