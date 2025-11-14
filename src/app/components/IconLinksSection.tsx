"use client";
import Link from "next/link";
import { RxArrowRight } from "react-icons/rx";
import { IconContext } from "react-icons";
import { SiLinkedin, SiGithub, SiMedium } from "react-icons/si";

export default function IconLinksSection() {

    return (
        <section className="text-left">
            <h2 className="text-xl text-[17px] font-semibold mb-1">Latest Updates <span className="emoji-large">👩🏻‍💻</span></h2>
            <p className="text-base text-[17px] mb-3">This is a living portfolio where I’ll continue to add new work as I keep learning and building. I’m currently focused on deepening my frontend skills.</p>
            <p className="text-base text-[17px] mb-3">I’m open to work!</p>
            <div className="mb-7">
                <IconContext.Provider value={{ size: "1.8em" }}>
                    <Link href="https://www.linkedin.com/in/zcdev/" target="_blank" aria-label="Connect with me on LinkedIn">
                        <SiLinkedin className="text-lg icon-linkedin icon-inline" title="LinkedIn" />
                    </Link>
                    <Link className="pl-3" href="https://github.com/zcdev" target="_blank" aria-label="Check me out on GitHub">
                        <SiGithub className="text-lg icon-github icon-inline" title="GitHub" />
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