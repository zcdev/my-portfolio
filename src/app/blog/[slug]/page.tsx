import MDXPage from "../../components/MDXPage";

type BlogPostPageProps = {
  params: Promise<{ slug: string; }>;
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  return <MDXPage params={params} contentFolder="posts" />;
}
