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
    <rect x="60" y="0" rx="2" ry="2" width="200" height="250" />
    <rect x="10" y="260" rx="2" ry="2" width="200" height="10" />
    <rect x="10" y="280" rx="2" ry="2" width="180" height="15" />
    <rect x="10" y="305" rx="2" ry="2" width="100" height="10" />

    <rect x="10" y="325" rx="2" ry="2" width="300" height="10" />
    <rect x="10" y="345" rx="2" ry="2" width="300" height="10" />
    <rect x="10" y="365" rx="2" ry="2" width="300" height="10" />
    <rect x="10" y="385" rx="2" ry="2" width="300" height="10" />
    <rect x="10" y="405" rx="2" ry="2" width="300" height="30" />
  </ContentLoader>
);

export default ProductLoader;
