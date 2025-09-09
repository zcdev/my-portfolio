import MDXPage from "../../components/MDXPage";

export default function ProjectPage({ params }: { params: { slug: string; }; }) {
  return <MDXPage slug={(params as { slug: string; }).slug} contentFolder="docs" />;
}
