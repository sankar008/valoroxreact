import React from "react";
import ContentLoader from "react-content-loader";

const ProductLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#c3c3c3"
    {...props}
  >
    <rect x="10" y="0" rx="2" ry="2" width="300" height="20" />
    <rect x="10" y="30" rx="2" ry="2" width="75" height="10" />
    <rect x="10" y="50" rx="2" ry="2" width="300" height="250" />
    <rect x="10" y="310" rx="2" ry="2" width="300" height="10" />
    <rect x="10" y="330" rx="2" ry="2" width="300" height="10" />
    <rect x="10" y="350" rx="2" ry="2" width="300" height="10" />
  </ContentLoader>
);

export default ProductLoader;
