 
 import Link from "next/link";
 const mdxComponents = {
    h1: (props: any) => (
      <h1 className="text-4xl font-bold mt-8 mb-4" {...props} />
    ),
    h2: (props: any) => (
        <h2 className="text-xl font-bold mt-8 mb-4" {...props} />
      ),
      h3: (props: any) => (
        <h3 className="text-base font-bold mt-8 mb-4" {...props} />
      ),
    p: (props: any) => <p className="text-[16px] mt-4 mb-3" {...props} />,
    pre: (props: any) => <pre className="bg-gray-100 text-black p-4 rounded-lg overflow-x-auto" {...props} />,
    code: (props: any) => <code className="font-mono" {...props} />,
    a: (props: any) => (
        <Link
          href={props.href ?? "#"}
          className="text-purple-600 hover:underline dark:text-purple-400"
        >
          {props.children}
        </Link>
      ),
    ul: (props: any) => (
        <ul className="text-[16px] mt-2 mb-4">
            {props.children}
        </ul>
    ),
    li: (props: any) => <li className="text-[16px]" {...props} />
};

export default mdxComponents;

