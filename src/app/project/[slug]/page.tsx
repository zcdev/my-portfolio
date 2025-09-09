import MDXPage from "../../components/MDXPage";

export default function ProjectPage({ params }: { params: { slug: string; }; }) {
  const { slug } = params;
  return <MDXPage slug={slug} contentFolder="docs" />;
}
