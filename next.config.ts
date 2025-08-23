import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX({
  pageExtensions: ["ts", "tsx", "mdx"],
});
