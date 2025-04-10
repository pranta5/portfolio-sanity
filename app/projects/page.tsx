import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { Metadata } from "next";
import Head from "next/head";
import ThreeDCardDemo from "../components/threeDCard";

export const metadata: Metadata = {
  title: "Projects | Pranta Das - Web Developer",
  description:
    "Discover the projects that Pranta Das has built over the years.",
  keywords: [
    "Pranta Das",
    "Web Developer",
    "Reactjs Developer",
    "Frontend Engineer",
  ],
  openGraph: {
    title: "Projects by Pranta Das-Web Developer",
    description:
      "Discover the projects that Pranta Das has built over the years.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/assests/home-page.png`,
        width: 800,
        height: 600,
        alt: "Pranta Das",
      },
    ],
    type: "profile",
  },
};

export default async function Project() {
  const projects: ProjectType[] = await getProjects();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pranta Das",
              jobTitle: "Web Developer",
              description:
                "Web Developer specializing in React, Next.js, and frontend development.",
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects`,
              image: `${process.env.NEXT_PUBLIC_SITE_URL}/assests/home-page.png`,
              sameAs: [
                "https://www.linkedin.com/in/pranta-das-381697261/",
                "https://www.github.com/pranta5",
              ],
            }),
          }}
        />
      </Head>
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects I&apos;ve built over the years
        </h1>
        <p className="text-base text-zinc-400 leading-relaxed">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas for how it can be
          improved.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-20 mb-12">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project._id}>
            <div>
              <ThreeDCardDemo
                img={project.logo}
                name={project.name}
                tag={project.tagline}
              />
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
