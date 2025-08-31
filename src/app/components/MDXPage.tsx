import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { RxArrowLeft } from "react-icons/rx";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import mdxComponents from "./CustomComponents";

type MDXPageProps = {
  params: Promise<{ slug: string }>;
  contentFolder: "posts" | "docs";
};

export default async function MDXPage({ params, contentFolder }: MDXPageProps) {
  const { slug } = await params;

  const filePath = path.join(
    process.cwd(),
    "src/app/content",
    contentFolder,
    `${slug}.mdx`
  );

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  return (
    <main className="prose max-w-4xl p-10">
      <header>
      <h1 className="text-3xl font-bold mb-4">{data.title}</h1>
      {contentFolder === "posts" && (
        <p className="text-lg text-gray-600 mb-6">{data.date}</p>
      )}
      {contentFolder === "docs" && (
        <>
          <p className="text-lg text-gray-600 mb-6">{data.description}</p>
          <p className="text-lg text-gray-600 mb-6">{data.tech}</p>
          <p className="text-lg text-gray-600 mb-6">{data.codebase}</p>
          <p className="text-lg text-gray-600 mb-6">{data.demo}</p>
        </>
      )}
      </header>
      <section className="mb-10">
        <MDXRemote source={content} components={mdxComponents} />
      </section>
      <Link
        href="/blog"
        className="text-lg text-purple-600 dark:text-purple-400 hover:underline inline-block"
      >
       <RxArrowLeft className="icon-inline align-[-0.17em]" /> Back to Blog
      </Link>
    </main>
  );
}
