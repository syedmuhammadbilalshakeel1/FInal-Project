import pagePathTypes from "../type/pagePath";

function setPagePath(path) {
   return {
      type: pagePathTypes.SET_PAGE_PATH,
      payload: path,
   };
}
export default setPagePath;
