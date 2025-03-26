import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Projects | Pranta Das - Web Developer",
  description: "Discover the projects that Pranta Das has built over the years.",
  keywords: ["Pranta Das", "Web Developer", "Reactjs Developer", "Frontend Engineer"],
  openGraph: {
    title: "Projects by Pranta Das-Web Developer",
    description: "Discover the projects that Pranta Das has built over the years.",
    url: "https://prantadas.com/projects",
    images: [{ url: "/pranta-profile.jpg", width: 800, height: 600, alt: "Pranta Das" }],
    type: "profile",
  }
}

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
              "name": "Pranta Das",
              "jobTitle": "Web Developer",
              "description": "Web Developer specializing in React, Next.js, and frontend development.",
              "url": "https://prantadas.com",
              "image": "https://prantadas.com/default-profile.jpg",
              "sameAs": [
                "https://www.linkedin.com/in/prantadas",
                "https://www.github.com/prantadas",
              ]
            })
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

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
          >
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-2 items-center rounded-lg p-2 bg-zinc-800 hover:bg-zinc-700 transition duration-500 ease-in-out">
              <div className="flex justify-center">
              <Image
              src={project.logo}
              width={300}
              height={120}
              alt={project.name}
              className="bg-zinc-800 rounded-md p-4"
            />
              </div>

            <div className=" flex flex-col gap-1 text-center">
              <h2 className="font-semibold mb-1">{project.name}</h2>
              <div className="text-sm text-zinc-400">{project.tagline}</div>
            </div>

            </div>

          </Link>
        ))}
      </section>
    </main>
  );
}