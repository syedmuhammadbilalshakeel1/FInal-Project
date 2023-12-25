import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
   <ContentLoader
      speed={2}
      width={1200}
      height={60}
      viewBox="0 0 1200 60"
      backgroundColor="#f0efef"
      foregroundColor="#e3e3e3"
      {...props}
   >
      <rect x="2" y="20" rx="5" ry="5" width="1200" height="40" />
   </ContentLoader>
);

export default Skeleton;