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
        <h3 className="text-black text-md dark:text-white font-semibold">CMS Development &bull; Landing Pages &bull; Email Marketing</h3>
        <p className="text-base text-[17px] mb-4">
          I build accessible, responsive, and high-performing digital experiences that connect frontend engineering with marketing and business goals.
        </p>
        <p className="text-base text-[17px] mb-4">
          With 10+ years of experience in digital production and marketing web development, I specialize in building scalable websites, landing pages, email templates, and content-driven experiences using modern frontend technologies.
        </p>
        <p className="text-base text-[17px] mb-5 pb-6 border-b-1 border-zinc-200">
          My work focuses on accessibility, usability, performance, and maintainability, while helping marketing teams streamline production workflows, deliver consistent digital experiences, and support meaningful business outcomes.
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
