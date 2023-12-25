/* eslint-disable no-unused-expressions */
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import fillProducts from "../../redux/actions/products";
import PaginationAllProducts from "../PaginationAllProducts/PaginationAllProducts";
import useServer from "../../hooks/useServer";
import Skeleton from "./Skeleton";
import RecentlyViewedProducts from "../RecentlyProducts/RecentlyProducts";


function AllProductItems(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [allProductState, setAllProductState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredHeadphones, setFilteredHeadphones] = useState([]);
  const [filteredKeyboards, setFilteredKeyboards] = useState([]);
  const [filteredSmartWatch, setFilteredSmartWatch] = useState([]);
  const [filteredMouses, setFilteredMouses] = useState([]);

  const allProducts = useSelector((state) => state.filteredProducts.filteredProducts);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const totalPages = Math.ceil(allProducts.length / productsPerPage);


  const { getAllProducts } = useServer();

  const isCardView = useSelector((state) => state.toggleCard.cardView);

  const dispatch = useDispatch();
  const { sortValue } = useSelector((state) => state.sortFilter);

  useEffect(() => {
    setIsLoading(true);
    getAllProducts()
      .then((result) => {
        if (sortValue === "+") {
          result.sort((a, b) => a.currentPrice - b.currentPrice);
        } else if (sortValue === "-") {
          result.sort((a, b) => b.currentPrice - a.currentPrice);
        }
        setIsLoading(false);
        if (props.products) {
          setIsLoading(true);
          setAllProductState(result);
          dispatch(fillProducts(result));
          setIsLoading(false);
        } else if (props.prodmouse) {
          setIsLoading(true);
          setFilteredMouses(result.filter((obj) => obj.categories === "mouses"));
          setIsLoading(false);
        } else if (props.prodhead) {
          setIsLoading(true);
          setFilteredHeadphones(result.filter((obj) => obj.categories === "headphones"));
          setIsLoading(false);
        } else if (props.prodkeyb) {
          setIsLoading(true);
          setFilteredKeyboards(result.filter((obj) => obj.categories === "keyboards"));
          setIsLoading(false);
        } else if (props.prodsmartwatch) {
          setIsLoading(true);
          setFilteredSmartWatch(result.filter((obj) => obj.categories === "smart_watch"));
          setIsLoading(false);
        }
        props.setIsAllProductItemsEffectComplete ? props.setIsAllProductItemsEffectComplete(true) : null;
      });
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [allProducts]);

  useEffect(() => {
    if (allProducts.length === 0 && props.products) {
      dispatch(fillProducts(allProductState));
    } else if (allProducts.length === 0 && props.prodmouse) {
      dispatch(fillProducts(filteredMouses));
    } else if (allProducts.length === 0 && props.prodkeyb) {
      dispatch(fillProducts(filteredKeyboards));
    } else if ((allProducts.length === 0) && props.prodhead) {
      dispatch(fillProducts(filteredHeadphones));
    } else if (allProducts.length === 0 && props.prodsmartwatch) {
      dispatch(fillProducts(filteredSmartWatch));
    }
  }, [allProducts, filteredMouses, filteredHeadphones, filteredSmartWatch, filteredKeyboards]);

  const handleResize = () => {
    if (window.innerWidth >= 1200) {
      setProductsPerPage(8);
    } else if (window.innerWidth <= 499) {
      setProductsPerPage(4);
    } else {
      setProductsPerPage(6);
    }
  };

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const newPaginatedProducts = allProducts.slice(startIndex, endIndex);
    setPaginatedProducts(newPaginatedProducts);
  }, [currentPage, allProducts, productsPerPage]);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="all-product__wrapper">
      <div className="container flex_container">
        {isLoading ? (
          <div className="skeleton-wrapper">
            {[...new Array(8)].map((_, index) => (
              <Skeleton className={"skeleton-item"} key={index} />
            ))}
          </div>
        ) : (
          <>
            <div className={isCardView ? "all-product__card" : "all-product__card-rows"}>
              {paginatedProducts.map((e) => (
                <ProductCard isCardView={isCardView} active={currentPage} item={e} key={e._id} />
              ))}
            </div>
            <PaginationAllProducts currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange}/>
          </>

        )}
      </div>
      <RecentlyViewedProducts active={currentPage} isCardView={isCardView} />
    </div>
  );
}

export default AllProductItems;