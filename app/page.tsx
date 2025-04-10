import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import Education from "./components/global/Education";
import { BackgroundLines } from "./components/ui/background-lines";
import { FlipWords } from "./components/ui/flip-words";

import { Metadata } from "next";
import Head from "next/head";
import TechStack from "./components/TechStack";

export const metadata: Metadata = {
  title: "Home | Pranta Das - Web Developer",
  description:
    "I'm Pranta Das, a web developer and designer. I live in kolkata, india, where I design the future.",
  keywords: [
    "Pranta Das",
    "Web Developer",
    "Reactjs Developer",
    "Frontend Engineer",
  ],
  openGraph: {
    title: "Home | Pranta Das-Web Developer",
    description:
      "Discover the skills and expertise of Pranta Das, a web developer and designer.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    images: `${process.env.NEXT_PUBLIC_SITE_URL}/assests/home-page.png`,
    type: "profile",
  },
};

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  const words = ["Developer", "Designer", "Explorer", "Traveler"];

  // console.log("url", process.env.NEXT_PUBLIC_SITE_URL+"/assests/home-page.png");
  return (
    <main className=" mx-auto lg:px-16 px-6">
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
              url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
              image: `${process.env.NEXT_PUBLIC_SITE_URL}/assests/home-page.png`,
              sameAs: [
                "https://www.linkedin.com/in/pranta-das-381697261/",
                "https://www.github.com/pranta5",
              ],
            }),
          }}
        />
      </Head>
      <BackgroundLines>
        <section className="flex flex-col items-center justify-center text-center w-full h-full">
          {profile &&
            profile.map((data) => (
              <div key={data._id} className="lg:max-w-3xl xl:max-w-4xl w-full">
                <h1 className="text-3xl font-bold tracking-tight md:text-5xl mb-6 leading-tight w-full">
                  {data.headline}
                  <FlipWords
                    words={words}
                    className="font-normal bg-[#3b3b3b] rounded-lg "
                  />
                </h1>
                <p className="text-base text-zinc-400 leading-relaxed">
                  {data.shortBio}
                </p>
                <ul className="flex flex-wrap justify-center items-center gap-4 my-10">
                  {Object.entries(data.socialLinks)
                    .sort()
                    .map(([key, value], id) => (
                      <li key={id}>
                        <a
                          href={value}
                          rel="noopener noreferrer"
                          className="flex items-center gap-x-3 border-2 m-2 rounded-2xl py-3 px-5  hover:text-purple-400 duration-300"
                        >
                          {key[0].toUpperCase() + key.slice(1)}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </section>
      </BackgroundLines>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div >
          <Education />
        </div>
        <div >
          <TechStack stack={"# Tech Stack"}/>
        </div>
      </div>
    </main>
  );
}
