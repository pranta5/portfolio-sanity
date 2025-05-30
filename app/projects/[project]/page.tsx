import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";
import { PortableText } from "@portabletext/react";
import fallBackImage from "@/public/project.jpg";
import Head from "next/head";

// Define props type
type Props = {
  params: Promise<{ project: string }>; // Promise for async params
};

// Metadata generation - must be async and await params
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project: slug } = await params;
  const project: ProjectType = await getSingleProject(slug);

  return {
    title: `${project.name} | Project`,
    description: project.tagline,
    openGraph: {
      images: project.coverImage?.image || fallBackImage.src,
      title: project.name,
      description: project.tagline,
      type: "article",
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`,
      
    },
  };
}

// Server Component - must be async and await params
export default async function Project({ params }: Props) {
  const { project: slug } = await params;
  const project: ProjectType = await getSingleProject(slug);

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
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
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/projects/${slug}`,
              image: `${process.env.NEXT_PUBLIC_SITE_URL}/assests/home-page.png`,
              sameAs: [
                "https://www.linkedin.com/in/pranta-das-381697261/",
                "https://www.github.com/pranta5",
              ],
            }),
          }}
        />
      </Head>
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {project.name}
          </h1>
          <a
            href={project.projectUrl}
            rel="noreferrer noopener"
            className="bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md px-4 py-2"
          >
            Explore
          </a>
        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={900}
          height={460}
          src={project.coverImage?.image || fallBackImage.src}
          alt={project.coverImage?.alt || project.name}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={project.description} />
        </div>
      </div>
    </main>
  );
}
