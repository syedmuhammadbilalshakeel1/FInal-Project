import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
   <ContentLoader
      speed={1}
      width={160}
      height={40}
      viewBox="0 0 160 40"
      backgroundColor="#f0efef"
      foregroundColor="#dad8d8"
      {...props}
   >
      <rect x="0" y="0" rx="0" ry="0" width="160" height="70" />
   </ContentLoader>
);

export default Skeleton;