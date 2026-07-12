import Link from "next/link";
import { MdxMeta } from "../types/mdxmeta";
import { getProjectMeta } from "../utils/index-metadata";
import { sortProjectDocsById } from "../utils/sort-content";
import ResponsiveImage from "../components/ResponsiveImage";
import ListPills from "../components/PillsList";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { LiaPenSolid } from "react-icons/lia";

export default async function ProjectIndex() {
  const docs: MdxMeta[] = getProjectMeta();
  const sorted = sortProjectDocsById(docs);

  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sorted.map((doc) => {
        return (
          <li
            key={doc.id}
            className="flex flex-col rounded-2xl border-1 border-zinc-200 shadow-md bg-slate-50 dark:bg-stone-800 dark:text-zinc-100 dark:border-none"
          >
            <ResponsiveImage className="rounded-t-2xl" src={`/assets/${doc.slug}`} alt={`A screenshot from the ${doc.title} project.`} width={1200} height={822} />
            <div className="pt-6 pr-6 pl-6 border-t-10 border-zinc-300 h-full">
              <div className="flex justify-between">
                <div>
                  <h3 className="md:text-lg lg:text-xl font-bold md:pr-8 lg:pr-2">{doc.title}</h3>
                  <ul className="pill flex">
                    {doc.tag && doc.tag.map((item) => (
                      <li key={item} className="w-fit text-xs text-black bg-green-200 rounded-full px-2 py-1 mt-1 mr-2">
                        {item === "Experimental" ? <LiaPenSolid className="inline-block text-[16px] mr-1 leading-1" /> : <IoMdCheckmarkCircleOutline className="inline-block text-[15px] mr-1 leading-1" />}
                        {item.replace(", ", "")}
                      </li>))}
                  </ul>
                </div>
                <div className="self-start">
                  <Link
                    href={`https://${doc.demo}`}
                    target="_blank"
                    className="text-base text-purple-800 dark:text-purple-300 underline mr-4"
                  >
                    Demo
                  </Link>
                  <Link
                    href={`https://${doc.repo}`}
                    target="_blank"
                    className="text-base text-purple-800 dark:text-purple-300 underline"
                  >
                    Repo
                  </Link>
                </div>
              </div>
              <ListPills items={doc.tech} />
              <p className="text-base text-[17px] mt-3 mb-4 pr-4">{doc.description}</p>
            </div>
            <div className="flex">
              <Link
                href={`/project/${doc.slug}`}
                className="text-base text-purple-800 dark:text-purple-300 underline pl-6 pr-6 pb-6"
              >
                View Project
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
