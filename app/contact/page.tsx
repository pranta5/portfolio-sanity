import React from "react";
import ContactComp from "../components/ContactComp";
import { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Contact | Pranta Das - Web Developer",
  description:
    "Get in touch with Pranta Das, a web developer and designer. I live in kolkata, india, where I design the future.",
  keywords: [
    "Pranta Das",
    "Web Developer",
    "Reactjs Developer",
    "Frontend Engineer",
  ],
  openGraph: {
    title: "Contact | Pranta Das-Web Developer",
    description: "Get in touch with Pranta Das, a web developer and designer.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
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

const pages = () => {
  return (
    <div>
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
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/contact`,
              image: `${process.env.NEXT_PUBLIC_SITE_URL}/assests/home-page.png`,
              sameAs: [
                "https://www.linkedin.com/in/pranta-das-381697261/",
                "https://www.github.com/pranta5",
              ],
            }),
          }}
        />
      </Head>
      <div className="text-center py-26 my-10">
        <p className="text-9xl font-bold uppercase">Say Hello</p>
        <p className="text-lg mx-auto mt-6 max-w-xl">
          Fill out the form below to get in touch with me. I am always excited
          to hear about new opportunities and I will do my best to respond to
          your inquiry within 24 hours.
        </p>
      </div>
      <div></div>
      <ContactComp />
    </div>
  );
};

export default pages;
