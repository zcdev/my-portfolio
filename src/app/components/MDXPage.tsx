import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { RxArrowLeft } from "react-icons/rx";
import fs from "fs";
import Link from "next/link";
import path from "path";
import matter from "gray-matter";
import mdxComponents from "./CustomComponents";
import PillsList from "./PillsList";

type MDXPageProps = {
  params: Promise<{ slug: string; }>;
  contentFolder: "posts" | "docs";
};

type Frontmatter = {
  title: string;
  date?: string;
  description?: string;
  tech?: string[];
};

function formatDate(iso?: string) {
  if (!iso) return null;
  const entryDate = new Date(iso);
  if (isNaN(entryDate.getTime())) return iso;
  return entryDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function MDXPage({ params, contentFolder }: MDXPageProps) {

  const { slug } = await params;

  const CONTENT_ROOT = path.join(process.cwd(), "src/app/content");

  const filePath = path.join(CONTENT_ROOT, contentFolder, `${slug}.mdx`);

  let source: string;

  try {
    source = fs.readFileSync(filePath, "utf-8");
  } catch {
    notFound();
  }

  const { content, data } = matter(source);

  const format = data as Partial<Frontmatter>;

  const postDate = formatDate(format.date);

  const back = contentFolder === "posts"
    ? { href: "/blog", label: "Back to Blog" }
    : { href: "/", label: "Back to Home" };

  return (
    <main className="prose max-w-4xl pt-5 pr-5 pb-10 pl-5">
      <header>
        <h1 className="text-3xl font-bold mb-4">{format.title}</h1>
        {contentFolder === "posts" && format.date && (
          <p className="text-lg mb-6">{postDate}</p>
        )}
        {contentFolder === "docs" && (
          <>
            <p className="text-lg mb-6">{format.description}</p>
            <h2 className="text-xl font-semibold">Tech & Features:</h2>
            <PillsList items={format.tech} />
          </>
        )}
      </header>
      <section className="mb-10 mdx-remote">
        <MDXRemote source={content} components={mdxComponents} />
      </section>
      {contentFolder === "posts" && (
        <Link
          href={back.href}
          className="text-lg text-purple-600 dark:text-purple-400 hover:underline inline-block"
        >
          <RxArrowLeft className="icon-inline align-[-0.17em]" /> {back.label}
        </Link>
      )}
      {contentFolder === "docs" && (
        <Link
          href={back.href}
          className="text-lg text-purple-600 dark:text-purple-400 hover:underline inline-block"
        >
          <RxArrowLeft className="icon-inline align-[-0.17em]" /> {back.label}
        </Link>
      )}
    </main>
  );
}
