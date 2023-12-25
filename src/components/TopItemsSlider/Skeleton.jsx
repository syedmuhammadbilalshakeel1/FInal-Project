import React from "react";
// eslint-disable-next-line import/no-unresolved
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
   <ContentLoader
      speed={1}
      width={1200}
      height={430}
      viewBox="0 0 1200 400"
      backgroundColor="#f0efef"
      foregroundColor="#e3e3e3"
      {...props}
   >
      <rect x="50" y="30" rx="2" ry="2" width="280" height="27" />
      <rect x="50" y="70" rx="2" ry="2" width="220" height="22" />
      <rect x="570" y="10" rx="15" ry="15" width="570" height="430" />
      <rect x="50" y="110" rx="2" ry="2" width="200" height="15" />
      <rect x="50" y="300" rx="0" ry="0" width="140" height="55" />
   </ContentLoader>
);

export default Skeleton;
