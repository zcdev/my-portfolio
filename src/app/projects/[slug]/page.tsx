import MDXPage from "../../components/MDXPage";

export default function ProjectPage(props: { params: { slug: string } }) {
  return (
    <MDXPage params={Promise.resolve(props.params)} contentFolder="docs" />
  );
}
