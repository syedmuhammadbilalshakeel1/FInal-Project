import { useSelector } from "react-redux";
import Breadcrumb from "../../components/BreadCrumb/BreadCrumb";
import AllProductItems from "../../components/AllProductItems/AllProductItems";
import SortFilter from "../../components/SortFilter/SortFilter";

const Search = () => {
   const { searchResults } = useSelector((state) => state.search);
   

   return (
      <section>
         <div className="container">
            <Breadcrumb />
            <div className="products-section">
               <SortFilter products={searchResults}/>
               <AllProductItems />
            </div>
         </div>
      </section>
   );
};

export default Search;
