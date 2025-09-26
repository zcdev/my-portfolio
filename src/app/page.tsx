import ProjectIndex from "./project/page";
import IconLinksSection from "./components/IconLinksSection";

export default function Home() {

  return (
    <main className="grid grid-cols-1 lg:grid-cols-8 gap-x-8 gap-y-6 max-w-[1700px] min-h-screen text-gray-900 p-6 dark:bg-stone-950 dark:text-zinc-400">
      <aside className="mb-4 col-span-8 lg:col-span-2 text-left">
        <h1 className="text-4xl font-bold mb-1">Zoe Chang</h1>
        <h2 className="title text-[21px] text-purple-600 mb-1 dark:text-purple-400">
          Frontend Developer
        </h2>
        <p className="text-base text-[17px] font-semibold mb-4">
          Blending tech + art into creative, user-friendly, accessible, and performant web experiences.
        </p>
        <p className="text-base text-[17px] mb-4">
          Frontend developer specializing in React.js, Next.js, and TypeScript, with a strong focus on inclusive user experience, web performance optimization, and intuitive interface design. I’m passionate about building clean, responsive interfaces and bringing modern best practices to collaborative teams.
        </p>
        <p className="text-base text-[17px] mb-5 pb-6 border-b-1 border-zinc-200">
          All the web apps in my portfolio support accessibility, dark-mode considerations, and responsive designs.
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
