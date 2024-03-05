import { useRouter } from "next/router";
import { projects } from "@/utils/data";
import Custom404 from "@/pages/404";
import { Fragment } from "react";
import Head from "next/head";
import SlugProject from "@/components/work/slugProject/SlugProject";

export default function Project() {
  const router = useRouter();
  const slug = router.query.slug;

  const project = projects.find((project) => project.slug === slug);

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];

  if (!project) {
    return <Custom404 />;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `https://horizontal-ten.vercel.app/work/${project.slug}`,
    image: project.images[0],
    author: {
      "@type": "Organization",
      name: "Horizontal Architecture Agency",
    },
  };

  return (
    <Fragment>
      <Head>
        <title>{project.title}</title>

        <link rel="icon" href="/icon.svg" />

        <meta name="description" content={project.description} />
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
        <link
          rel="canonical"
          href={`https://horizontal-ten.vercel.app/work/${project.slug}`}
        />
        <link
          rel="alternate"
          hrefLang="en-US"
          href="https://horizontal-ten.vercel.app/en-US"
        />

        <meta property="og:title" content={`${project.title}`} />
        <meta property="og:description" content={project.subtitle} />
        <meta
          property="og:url"
          content={`https://horizontal-ten.vercel.app/work/${project.slug}`}
        />
        <meta
          property="og:site_name"
          content={`https://horizontal-ten.vercel.app/work/${project.slug}`}
        />
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
        <meta name="twitter:title" content={`${project.title}`} />
        <meta name="twitter:description" content={project.subtitle} />
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
      <SlugProject
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
    </Fragment>
  );
}
