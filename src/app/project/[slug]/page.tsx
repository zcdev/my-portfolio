import MDXPage from "../../components/MDXPage";

export default function ProjectPage({ params }: { params: { slug: string; }; }) {
  return <MDXPage slug={params.slug} contentFolder="docs" />;
}
