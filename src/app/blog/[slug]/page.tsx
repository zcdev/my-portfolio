import MDXPage from "../../components/MDXPage";

export default function BlogPostPage({ params }: { params: { slug: string; }; }) {
  return <MDXPage slug={(params as { slug: string; }).slug} contentFolder="posts" />;
}
