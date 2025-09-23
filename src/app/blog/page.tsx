import Link from "next/link";
import { getBlogMeta, MdxMeta } from "../utils/index-metadata";
import { RxArrowLeft } from "react-icons/rx";

export default async function BlogIndex() {
  const posts: MdxMeta[] = getBlogMeta();

  // Group posts by year
  const grouped = posts.reduce((total, post) => {
    const year = new Date(post.date!).getFullYear();
    if (!total[year]) total[year] = [];
    return total;
  }, {} as Record<number, typeof posts>);

  // Sort posts by reverse chronological order
  const sorted = posts.sort((a, b) => Number(new Date((b.date!))) - Number(new Date(a.date!)));

  return (
    <main className="prose max-w-2xl text-left p-8">
      <header>
        <h1 className="text-4xl font-bold mb-6">Blog</h1>
        <h2 className="text-lg font-semibold mb-4">Real lessons, light humor — coding notes with a human touch.</h2>
        <p className="text-lg mb-5">These posts are my reflections, jotted down with witty humor and a playful twist as I explore and uncover insights through coding trials and errors. They capture lessons learned from my projects, explained in plain language with a friendly, human touch. Along the way, you may even find the takeaways amusing! 😏✨</p>
      </header>
      {Object.keys(grouped)
        .sort((a, b) => Number(b) - Number(a))
        .map((year) => (
          <section key={year}>
            <h3 className="text-lg font-semibold mb-1">From {year}</h3>
            <ul className="mb-6">
              {sorted.map((post) => (
                <li key={post.slug} className="mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-lg text-purple-600 hover:underline dark:text-purple-400"
                  >{post.title}
                  </Link>
                  <span className="text-lg text-gray-400 pl-2">({post.date!.slice(5, post.date!.length)})</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      <Link
        href="/"
        className="text-lg text-purple-600 dark:text-purple-400 hover:underline inline-block"
      >
        <RxArrowLeft className="icon-inline align-[-0.17em]" /> Back to Home
      </Link>
    </main>
  );
}
