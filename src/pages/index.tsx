import { type NextPage } from "next";
import Head from "next/head";

import { Button } from "~/components/button";
import { Title } from "~/components/title";

import { api } from "~/utils/api";
import OnboardingCard from "./OnboardingCard";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const title = "Another branch";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#02426d] to-[#24152c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <Title>
            Another branch
          </Title>

          <div>
            <Button>Primary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>


          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <OnboardingCard title="First Steps →" href="https://create.t3.gg/en/usage/first-steps" text="Just the basics - Everything you need to know to set up your database and authentication." />
            <OnboardingCard title="Documentation →" href="https://create.t3.gg/en/introduction" text="Learn more about Create T3 App, the libraries it uses, and how to deploy it." />
          </div>

          <p className="text-2xl text-white">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p>

        </div>
      </main>
    </>
  );
};

export default Home;
