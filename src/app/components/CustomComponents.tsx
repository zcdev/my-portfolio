import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";
import { ComponentPropsWithoutRef } from "react";

const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2 className="text-xl font-bold mt-8 mb-4" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3 className="text-base mt-8 mb-4" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => <p className="text-lg mt-4 mb-2" {...props} />,
  pre: (props: ComponentPropsWithoutRef<"pre">) => <pre className="bg-gray-100 text-black p-4 rounded-lg overflow-x-auto" {...props} />,
  code: (props: ComponentPropsWithoutRef<"code">) => <code className="font-mono" {...props} />,
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <>
      {typeof props.children === "string" && props.children.includes("Repo") || typeof props.children === "string" && props.children.includes("Demo")
        ?
        <Link
          href={props.href ?? "#"}
          className="flex justify-self-end items-center text-lg text-purple-600 dark:text-purple-400 hover:underline block pb-2"
        >{props.children}<RxArrowRight className="icon-block align-[-0.24em] ml-1" />
        </Link>
        :
        <Link
          href={props.href ?? "#"}
          className="text-purple-600 hover:underline dark:text-purple-400"
        >{props.children}
        </Link>
      }
    </>
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="mt-2 mb-4">
      {props.children}
    </ul>
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => <li {...props} />
};

export default mdxComponents;

