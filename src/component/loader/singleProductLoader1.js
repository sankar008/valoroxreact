import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="30" rx="3" ry="3" width="67" height="11" />
    <rect x="76" y="30" rx="3" ry="3" width="140" height="11" />
    <rect x="127" y="78" rx="3" ry="3" width="53" height="11" />
    <rect x="187" y="78" rx="3" ry="3" width="72" height="11" />
    <rect x="18" y="78" rx="3" ry="3" width="100" height="11" />
    <rect x="0" y="101" rx="3" ry="3" width="37" height="11" />
    <rect x="18" y="53" rx="3" ry="3" width="140" height="11" />
    <rect x="166" y="43" rx="3" ry="3" width="173" height="11" />
  </ContentLoader>
);

export default MyLoader;
