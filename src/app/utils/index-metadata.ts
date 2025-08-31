import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type MdxMeta = {
  slug: string;
  title: string;
  date?: string;
  description?: string;
  tech?: string;
  codebase?: string;
  demo?: string;
  cover?: string
};

export function getPostMetadata(contentFolder: "docs" | "posts"): MdxMeta[] {
  const dir = path.join(process.cwd(), `src/app/content/${contentFolder}`);
  const files = fs.readdirSync(dir).filter(files => (files.endsWith(".mdx")));

  return files.map(file => {
    const source = fs.readFileSync(path.join(dir, file), "utf-8");
    const { data } = matter(source);
    const slug = (data.slug as string) || file.replace(/\.mdx$/, "");

    return {
      slug,
      title: (data.title as string) || slug,
      description: (data.description as string) || undefined,
      tech: (data.tech as string) || undefined,
      codebase: (data.codebase as string) || undefined,
      date: (data.date as string) || undefined,
      cover: (data.cover as string) || undefined,
      demo: (data.demo as string) || undefined,
    }
  })
}

export const getProjectMeta = () => getPostMetadata("docs");
export const getBlogMeta = () => getPostMetadata("posts");