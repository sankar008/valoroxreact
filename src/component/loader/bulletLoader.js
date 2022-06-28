import React from "react";
import ContentLoader from "react-content-loader";

const Bullet = (props) => (
  <div className="w-48">
    <ContentLoader
      speed={2}
      width={400}
      height={150}
      viewBox="0 0 400 150"
      backgroundColor="#f3f3f3"
      foregroundColor="#c3c3c3"
      {...props}
    >
      <rect x="0" y="15" rx="5" ry="5" width="190" height="10" />

      <rect x="0" y="45" rx="5" ry="5" width="190" height="10" />

      <rect x="0" y="75" rx="5" ry="5" width="190" height="10" />

      <rect x="0" y="105" rx="5" ry="5" width="190" height="10" />
    </ContentLoader>
  </div>
);

export default Bullet;
