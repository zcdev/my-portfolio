import MDXPage from "../../components/MDXPage";

export default function BlogPostPage(props: {
  params: { slug: string };
}) {
  return (
    <MDXPage params={Promise.resolve(props.params)} contentFolder="posts" />
  );
}
