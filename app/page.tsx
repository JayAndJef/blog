import Image from "next/image";
import Head from "next/head";

import { getSortedPostsData } from "../lib/get-posts";
import Link from "next/link";

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        <div className="flex justify-center py-10">
          <Image
            src="https://www.gravatar.com/avatar/7ae0d3b5f2759e8c803ca4ad490f9832?s=258"
            height={"196"}
            width={"196"}
            alt="Jayandjeff"
            className="flex border-solid border-4 border-zinc-700 rounded-lg shadow-xl shrink-0"
          />
        </div>

        <h1 className="flex justify-center pt-6 pb-10 px-4 text-3xl">
          Jayandjeff - Blog
        </h1>

        <section className="flex justify-center p-5 max-h-screen overflow-y-scroll">
          <ul className="space-y-8">
            {allPostsData.map(({ id, date, title }) => (
              <li
                className="rounded-md border-4 border-zinc-700 py-8 px-12 shadow-xl"
                key={id}
              >
                <h1 className="text-2xl">{title}</h1>
                <br />
                <h1 className="text-xl">{date}</h1>
                <br />
                <button className="rounded-md border-2 border-zinc-900 p-3 hover:bg-slate-400">
                  <Link href={"/posts/".concat(id)}>Visit Article</Link>
                </button>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
