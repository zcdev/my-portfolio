import { MdxMeta } from "../types/mdxmeta";

export function sortProjectDocsById(docs: MdxMeta[]): MdxMeta[] {
    return [...docs].sort((a, b) => a.id! - b.id!);
}

export function sortBlogPostsByDate(posts: MdxMeta[]): MdxMeta[] {
    return [...posts].sort(
        (a, b) => b.date!.localeCompare(a.date!) ||
            b.title!.localeCompare(a.title!)
    );
}

export function groupBlogPostsByYear(posts: MdxMeta[]): Record<number, MdxMeta[]> {
    return posts.reduce((acc, post) => {
        const year = new Date(post.date!).getFullYear();
        (acc[year] ??= []).push(post);
        return acc;
    }, {} as Record<number, MdxMeta[]>);
}
