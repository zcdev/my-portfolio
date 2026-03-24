import Link from "next/link";
import { MdxMeta } from "../types/mdxmeta";
import { getProjectMeta } from "../utils/index-metadata";
import { sortProjectDocsById } from "../utils/sort-content";
import ResponsiveImage from "../components/ResponsiveImage";
import ListPills from "../components/PillsList";

export default async function ProjectIndex() {
  const docs: MdxMeta[] = getProjectMeta();
  const sorted = sortProjectDocsById(docs);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sorted.map((doc) => {
        return (
          <li
            key={doc.id}
            className="flex flex-col rounded-2xl border-1 border-zinc-200 shadow-md bg-zinc-100 dark:bg-stone-800 dark:text-zinc-400 dark:border-none"
          >
            <ResponsiveImage className="rounded-t-2xl" src={`/assets/${doc.slug}`} alt="" width={1200} height={822} />
            <div className="pt-6 pr-6 pl-6 border-t-10 border-zinc-300 h-full">
              <div className="flex">
                <h3 className="text-left md:text-lg lg:text-xl font-bold mb-2 md:pr-8 lg:pr-2 w-[80%]">{doc.title}</h3>
                <div className="flex justify-end">
                  <Link
                    href={`https://${doc.demo}`}
                    target="_blank"
                    className="text-base text-purple-600 dark:text-purple-400 underline mr-4"
                  >
                    Demo
                  </Link>
                  <Link
                    href={`https://${doc.repo}`}
                    target="_blank"
                    className="text-base text-purple-600 dark:text-purple-400 underline"
                  >
                    Repo
                  </Link>
                </div>
              </div>
              <ListPills items={doc.tech} />
              <p className="text-base text-[17px] mt-3 mb-4 pr-4">{doc.description}</p>
            </div>
            <Link
              href={`/project/${doc.slug}`}
              className="text-base text-purple-600 dark:text-purple-400 underline pl-6 pr-6 pb-6"
            >
              View Project
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
