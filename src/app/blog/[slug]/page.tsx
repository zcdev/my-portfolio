import MDXPage from "../../components/MDXPage";

export default function BlogPostPage(props: {
  params: { slug: string; };
}) {
  return (
    <MDXPage params={props.params} contentFolder="posts" />
  );
}
