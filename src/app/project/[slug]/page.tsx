import MDXPage from "../../components/MDXPage";

type ProjectPageProps = {
  params: Promise<{ slug: string; }>;
};

export default function ProjectPage({ params }: ProjectPageProps) {
  return <MDXPage params={params} contentFolder="docs" />;
}
