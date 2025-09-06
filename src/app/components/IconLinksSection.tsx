"use client";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IconContext } from "react-icons";

export default function IconLinksSection() {

    return (
        <section className="text-left">
            <h2 className="text-xl font-semibold mb-1">Latest Updates</h2>
            <p className="text-base"><span className="emoji-large ">👩🏻‍💻</span> I'm available for hire!</p>
            <div className="mt-2 mb-7">
                <IconContext.Provider value={{ size: "1.8em" }}>
                    <Link href="https://www.linkedin.com/in/zcdev/" aria-label="Connect with me on LinkedIn">
                        <FaLinkedin className="text-lg icon-linkedin icon-inline" title="LinkedIn" />
                    </Link>
                    <Link className="pl-3" href="https://github.com/zcdev" aria-label="Check me out on GitHub">
                        <FaGithubSquare className="text-lg icon-github icon-inline" title="GitHub" />
                    </Link>
                </IconContext.Provider>
            </div>
            <Link
                href="/blog"
                className="text-lg text-purple-600 dark:text-purple-400 hover:underline align-middle inline-block"
            >
                Visit Blog <RxArrowRight className="icon-inline align-[-0.24em]" />
            </Link>
        </section>
    );
}