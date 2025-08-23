import Link from "next/link";
import ProjectsList from "./components/projectList";
import Projects from "./components/project";

const showcases = [
  {
    title: "Who Ate the Cookie 🍪",
    features: "Next.js + Voice API",
    description:
      "A playful, voice-interactive guessing game built with Next.js. Designed for accessibility and performance, with an engaging narrative that keeps users curious from start to finish.",
  },
  {
    title: "Easter Eggs Festival 🐣",
    features: "React.js + TypeScript",
    description:
      "A strategic number-memory game built in React.js. Features custom sound design and inclusive accessibility practices, creating a fun, approachable experience for all ages.",
  },
  {
    title: "Easter Eggs Festival 🐣",
    features: "React.js + TypeScript",
    description:
      "A strategic number-memory game built in React.js. Features custom sound design and inclusive accessibility practices, creating a fun, approachable experience for all ages.",
  },
];

export default function Home() {
  return (
    <main className="grid grid-cols-8 gap-x-8 gap-y-6 min-h-screen bg-white text-gray-900 p-8">
      {/* Hero */}
      <aside className="text-center mb-16 col-span-2">
        <section className="text-left">
          <h1 className="text-4xl font-bold mb-2">Zoe Chang</h1>
          <p className="text-xl text-purple-600 mb-4">
            Frontend Engineer & Digital Creative
          </p>
          <p className="text-base mb-4">
            I’m a frontend developer and digital creative with roots in design,
            music production, and media. I specialize in React.js and modern
            JavaScript frameworks, blending artistry with engineering to bring
            design visions to life as interactive, user-focused products.
          </p>
          <p className="text-base mb-4">
            My background gives me a unique perspective: I think like a
            designer, build like an engineer, and create experiences that feel
            both functional and expressive. From enterprise platforms to playful
            UI experiments, I thrive on translating ideas into polished,
            engaging interfaces.
          </p>
        </section>
        {/* Blog Teaser */}
        <section className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
          <Link href="/blog" className="text-purple-600 hover:underline">
            Visit Blog →
          </Link>
        </section>
      </aside>

      {/* Featured Projects */}
      <section className="mb-16 col-span-6">
        <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
        <ProjectsList>
          {showcases.map((showcase, index) => (
            <Projects key={index} showcase={showcase} />
          ))}
        </ProjectsList>
      </section>
    </main>
  );
}
