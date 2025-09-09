import MDXPage from "../../components/MDXPage";

export default function BlogPostPage({ params }: { params: { slug: string; }; }) {
  const { slug } = params;
  return <MDXPage slug={slug} contentFolder="posts" />;
}
