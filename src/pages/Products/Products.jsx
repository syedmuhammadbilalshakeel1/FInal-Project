/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/actions/counterFilter";
import Filter from "../../components/Filter/Filter";
import FilterMini from "../../components/Filter/FilterMini";
import Breadcrumb from "../../components/BreadCrumb/BreadCrumb";
import SortFilter from "../../components/SortFilter/SortFilter";
import AllProductItems from "../../components/AllProductItems/AllProductItems";
import { toggleFilter, addCountFilter } from "../../handlers/handlersFunctions";

const Products = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(
    (state) => state.categories
  );
  const filterCategories = categories.filter((item) => item.level === 0);
  const [isAllProductItemsEffectComplete, setIsAllProductItemsEffectComplete] = useState(false);


  const filterFull = React.createRef();
  const filterMini = useRef();
  const [isFilterCollapsed, setIsFilterCollapsed] = useState(false);

  const handleAddCountFilter = (e) => {
    addCountFilter(e, dispatch, increment, decrement);
  };

  const handleToggleFilter = () => {
    toggleFilter(filterFull, filterMini, setIsFilterCollapsed);
  };

  const { filteredProducts } = useSelector((state) => state.filteredProducts);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(filteredProducts);
  }, [filteredProducts]);

  return (
    <>
      <Breadcrumb />
      <section>
        <div className="container">
          <div className="products-section">
            <SortFilter products={products} isCollapsed={isFilterCollapsed} />
            <Filter categories={filterCategories} toggle={handleToggleFilter} addCounter={handleAddCountFilter} ref={filterFull} apply={handleToggleFilter} isAllProductItemsEffectComplete={isAllProductItemsEffectComplete}/>
            <FilterMini toggle={handleToggleFilter} ref={filterMini} />
            <AllProductItems products={"pageProducts"} setIsAllProductItemsEffectComplete={setIsAllProductItemsEffectComplete}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;

