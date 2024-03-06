import { Fragment, useRef } from "react";
import Head from "next/head";
import Hero from "@/components/about/hero/Hero";
import Info from "@/components/about/info/Info";
import Vision from "@/components/about/vision/Vision";
import dynamic from "next/dynamic";
import TextPath from "@/components/about/textpath/TextPath";

const DynamicGallery = dynamic(
  () => import("@/components/about/gallery/Gallery"),
  {
    loading: () => <p>Loading...</p>,
  }
);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Horizontal Architecture Agency",
  description:
    "Meet the talented team behind our visionary designs at Horizontal Architecture Agency.",
  url: "https://horizontal-ten.vercel.app/team",
  logo: "https://horizontal-ten.vercel.app/icon.svg",
};

export default function About() {
  const ref = useRef(null);

  return (
    <Fragment>
      <Head>
        <title>About</title>

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
        <link rel="canonical" href="https://horizontal-ten.vercel.app/team" />
        <link
          rel="alternate"
          hrefLang="en-US"
          href="https://horizontal-ten.vercel.app/en-US"
        />

        <meta property="og:title" content="Team" />
        <meta
          property="og:description"
          content="Crafting visionary designs in Oslo and beyond. Our architecture agency blends Scandinavian minimalism with innovative solutions. Discover our portfolio today."
        />
        <meta
          property="og:url"
          content="https://horizontal-ten.vercel.app/team"
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
        <meta name="twitter:title" content="Team" />
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
      <DynamicGallery />
      <Vision />
      <TextPath ref={ref} />
      <Info />
    </Fragment>
  );
}
