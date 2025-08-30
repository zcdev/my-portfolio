import Link from "next/link";
import { getPostMetadata } from "../utils/index-metadata";

export default function ProjectIndex() {
  const docs = getPostMetadata("docs");

  return (
    <ul className="grid md:grid-cols-2 gap-6">
      {docs.map((doc) => {
        return (
          <li
            key={doc.slug}
            className="p-6 rounded-2xl border-2 border-gray-100 shadow-md bg-gray-50 dark:bg-stone-800 dark:text-zinc-400 dark:border-none"
          >
            <h3 className="text-lg font-bold mb-2">{doc.title}</h3>
            <p className="text-base text-sm font-semibold mb-1">
              {doc.tech}
            </p>
            <p className="text-base mb-2">{doc.description}</p>
            <Link
              href=""
              className="text-base text-purple-600 dark:text-purple-400 underline mr-8"
            >
              View Project
            </Link>
            <Link
              href=""
              className="text-base text-purple-600 dark:text-purple-400 underline"
            >
              See Demo
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
