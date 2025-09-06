import ProjectIndex from "./project/page";
import IconLinksSection from "./components/IconLinksSection";

export default function Home() {

  return (
    <main className="grid grid-cols-1 lg:grid-cols-8 gap-x-8 gap-y-6 max-w-[1700px] min-h-screen text-gray-900 p-8 dark:bg-stone-950 dark:text-zinc-400">
      <aside className="mb-4 col-span-8 lg:col-span-2 text-left">
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
        <p className="text-base mb-5 pb-6 border-b-1 border-zinc-200">
          All the web apps in my portfolio support accessibility, dark-mode,
          and responsive designs.
        </p>
        <IconLinksSection />
      </aside>
      <section className="mb-16 col-span-8 lg:col-span-6">
        <h2 className="text-3xl font-semibold mb-4">Featured Projects</h2>
        <ProjectIndex />
      </section>
    </main>
  );
}
