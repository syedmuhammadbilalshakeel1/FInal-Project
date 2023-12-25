import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Store } from "react-notifications-component";
import useServer from "../../hooks/useServer";
import useDebounce from "../../hooks/useDebounce";
import setSearchProducts from "../../redux/actions/searchBar";
import FoundProduct from "../FoundProduct/FoundProduct";
import { addFilteredProducts } from "../../redux/actions/filteredProducts";
import notificationsSettings from "../../constants/constants";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getSearchedProducts } = useServer();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [notFound, setIsNotFound] = useState(false);
  const { searchResults } = useSelector((state) => state.search);

  const searchPhrases = {
    query: searchTerm,
  };

  const handleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.blur();
    if (searchResults) {
      setIsSearchOpen(false);
      navigate("/search");
      setSearchTerm("");
      setIsNotFound(false);
    }
    if (notFound) {
      navigate("/products");
    }
  };

  async function searchProducts() {
    if (searchTerm === "") {
      return;
    }
    try {
      const products = await getSearchedProducts(searchPhrases);
      if (products.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
      if (searchTerm !== "") {
        dispatch(addFilteredProducts(products));
        dispatch(setSearchProducts(products));
      }
    } catch (error) {
      Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: error.message });
    }
  }

  useDebounce(searchProducts, 500, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  const handleSearchCLose = () => {
    setIsSearchOpen(false);
    setSearchTerm("");
    navigate("/products");
    dispatch(setSearchProducts([]));
  };

  return (
    <>
      <svg
        onClick={handleSearch}
        className="header__nav-search"
        xmlns="http://www.w3.org/2000/svg"
        height="1.1em"
        viewBox="0 0 512 512"
        style={{ fill: "#393d45" }}
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
      <div
        onClick={() => handleSearchCLose()}
        onKeyDown={() => handleSearchCLose()}
        role="button"
        tabIndex={0}
        className={`search-wrap${isSearchOpen ? "--active" : ""}`}
      >
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className={`header__search-form${isSearchOpen ? "--active" : ""}`}>
        <input
          className={`header__search-input${isSearchOpen ? "--active" : ""}`}
          type="text"
          placeholder="Search products..."
          name="searchInput"
          value={searchTerm}
          autoComplete="off"
          onChange={(e) => handleSearchChange(e)}
          onFocus={() => setIsSearchOpen(true)}
        />
        <button className={`header__search-submit${isSearchOpen ? "--active" : ""}`} type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 512 512" style={{ fill: "#393d45" }}>
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
        <svg
          onClick={handleSearch}
          className="header__search-close"
          xmlns="http://www.w3.org/2000/svg"
          height="1.4em"
          viewBox="0 0 384 512"
        >
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            fill="#393d45"
          />
        </svg>
        {isSearchOpen ? (
          <ul className="searched__list">
            {searchResults.length >= 1 ? (
              searchResults?.map((product) => {
                return <FoundProduct key={product.itemNo} {...product} setIsSearchOpen={setIsSearchOpen} />;
              })
            ) : (
              <div className="searching-preview">
                {searchTerm.length <= 3 ? <p>Write at least 3 letters</p> : <p>{notFound ? "Nothing Found" : "Searching..."}</p>}
              </div>
            )}
          </ul>
        ) : null}
      </form>
    </>
  );
};

export default SearchBar;
