import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
   <ContentLoader
      speed={1}
      width={200}
      height={300}
      viewBox="0 0 200 300"
      backgroundColor="#f0efef"
      foregroundColor="#dad8d8"
      {...props}
   >
      <rect x="-2" y="-117" rx="0" ry="0" width="194" height="375" />
      <rect x="3" y="269" rx="0" ry="0" width="95" height="24" />
      <rect x="146" y="267" rx="0" ry="0" width="44" height="25" />
   </ContentLoader>
);

export default Skeleton;