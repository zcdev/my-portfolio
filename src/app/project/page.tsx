import Link from "next/link";
import { getProjectMeta, MdxMeta } from "../utils/index-metadata";
import ResponsiveImage from "../components/ResponsiveImage";
import ListPills from "../components/PillsList";

export default async function ProjectIndex() {
  const docs: MdxMeta[] = getProjectMeta();
  const sorted = docs.sort((a, b) => a.id! - b.id!);

  return (
    <ul className="grid md:grid-cols-2 gap-6">
      {sorted.map((doc) => {
        return (
          <li
            key={doc.id}
            className="rounded-2xl border-1 border-zinc-200 shadow-md bg-zinc-100 dark:bg-stone-800 dark:text-zinc-400 dark:border-none"
          >
            <ResponsiveImage className="rounded-t-2xl" src={`/assets/${doc.slug}`} alt="" width={600} height={411} />
            <div className="p-6 border-t-10 border-zinc-300">
              <h3 className="text-2xl text-[22px] font-bold mb-2">{doc.title}</h3>
              <ListPills items={doc.tech} />
              <p className="text-base text-[17px] mt-3 mb-4 pr-4">{doc.description}</p>
              <Link
                href={`/project/${doc.slug}`}
                className="text-base text-purple-600 dark:text-purple-400 underline mr-8"
              >
                View Project
              </Link>
              <Link
                href={`https://${doc.demo}`}
                target="_blank"
                className="text-base text-purple-600 dark:text-purple-400 underline"
              >
                See Demo
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
