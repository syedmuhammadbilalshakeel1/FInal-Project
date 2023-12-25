import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import BreadСrumbItem from "../BreadСrumbItem/BreadCrumbItem";
import setPagePath from "../../redux/actions/pagePath";

const Breadcrumb = () => {
   const dispatch = useDispatch();
   const location = useLocation();
   const [path, setPath] = useState([]);
   useEffect(() => {
      const { pathname } = location;
      const segments = pathname.split("/").filter((segment) => segment !== "");
      const currentSegment = pathname.substring(1);
      dispatch(setPagePath(currentSegment));

      setPath((prevPath) => {
         const previousPath = prevPath.slice(0, -1);
         const currentPath = segments;

         if (currentPath.length === previousPath.length + 1) {
            return [...previousPath, currentPath[currentPath.length - 1]];
         }
         if (currentPath.length === previousPath.length - 1) {
            return previousPath;
         }
         return currentPath;
      });
   }, [location, dispatch]);


   const renderBreadcrumb = () => {
      if (path.length === 0) {
         return <Link className="navigation-block__link" to="/">Home</Link>;
      }

      const breadcrumb = path.map((segment, index) => (
         <BreadСrumbItem
            key={segment}
            to={`/${path.slice(0, index + 1).join("/")}`}
            text={segment.charAt(0).toUpperCase() + segment.slice(1)}
         />
      ));

      return (
         <>
            <Link onClick={() => dispatch(setPagePath("home"))} className="navigation-block__link" to="/">Home</Link>
            {breadcrumb}
         </>
      );
   };


   return (
      <>
         <div className="container">
            <div className="navigation-block">
               {renderBreadcrumb()}
            </div>
         </div>
      </>

   );
};

export default Breadcrumb;
