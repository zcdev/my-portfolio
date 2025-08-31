import Link from "next/link";
import ProjectIndex from "./project/page";
import { RxArrowRight } from "react-icons/rx";

export default function Home() {
  return (
    <main className="grid grid-cols-8 gap-x-8 gap-y-6 min-h-screen bg-white text-gray-900 p-8 dark:bg-stone-950 dark:text-zinc-400">
      {/* Hero */}
      <aside className="mb-16 col-span-2">
        <section className="text-left">
          <h1 className="text-4xl font-bold mb-2">Zoe Chang</h1>
          <p className="text-xl text-purple-600 mb-1 dark:text-purple-400">
            Front-end Developer
          </p>
          <p className="text-base font-semibold mb-4">
            Building accessible and interactive UX
          </p>
          <p className="text-base mb-4">
            I’m a front-end developer specializing in crafting modern,
            responsive web interfaces with a strong emphasis on accessibility,
            performance, and intuitive user interaction. With hands-on
            experience in React, Next.js, and TypeScript, I build products that
            are both usable and engaging.
          </p>
          <p className="text-base mb-4">
            All the web apps in my portfolio support accessibility, dark-mode,
            and responsive designs.
          </p>
        </section>
        {/* Blog Teaser */}
        <section className="text-left">
          <h2 className="text-xl font-semibold mb-4">Latest Updates</h2>
          <Link
            href="/blog"
            className="text-lg text-purple-600 dark:text-purple-400 hover:underline align-middle inline-block"
          >
            Visit Blog <RxArrowRight className="icon-inline align-[-0.24em]" />
          </Link>
        </section>
      </aside>

      {/* Featured Projects */}
      <section className="mb-16 col-span-6">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <ProjectIndex />
      </section>
    </main>
  );
}
