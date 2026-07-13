import ProjectIndex from "./project/page";
import IconLinksSection from "./components/IconLinksSection";

export default function Home() {

  return (
    <main className="grid grid-cols-1 lg:grid-cols-8 gap-x-8 gap-y-6 max-w-[1700px] min-h-screen text-gray-900 p-6 dark:bg-stone-950 dark:text-zinc-100">
      <aside className="mb-4 col-span-8 lg:col-span-2 text-left">
        <h1 className="text-4xl font-bold mb-1">Zoe Chang</h1>
        <h2 className="title text-[21px] text-purple-800 mb-1 dark:text-purple-300">
          Frontend Developer
        </h2>
        <h3 className="text-black text-md dark:text-white font-semibold">Accessibility &bull; Usability &bull; Design System</h3>
        <p className="text-base text-[17px] mb-4">
          I build thoughtful, human-centered interfaces that transform design concepts into accessible, intuitive, and user-friendly experiences using React, Next.js, TypeScript, and modern UI technologies.
        </p>
        <p className="text-base text-[17px] mb-5 pb-6 border-b-1 border-zinc-200">
          Across my work, I prioritize accessibility, usability, dark mode, and responsive design to create production-ready web applications that are inclusive, reliable, and focused on real user needs.
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
