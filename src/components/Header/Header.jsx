import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import { Image } from "cloudinary-react";
import cloudinaryConfig from "../../config/cloudinaryConfig";
import { fetchCategories } from "../../redux/actions/categories";
import setPagePath from "../../redux/actions/pagePath";
import MobileCategory from "../MobileCategory/MobileCategory";
import SearchBar from "../SearchBar/SearchBar";
import Currency from "../Currency/Currency";

const Header = () => {

  const dispatch = useDispatch();
  const { compareProducts } = useSelector((state) => state.compareProducts);
  const { pagePath } = useSelector((state) => state.currentPath);
  const { token } = useSelector((state) => state.user.userInfo);
  const cartQuantity = useSelector((state) => state.cart.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const pages = ["Products", "About"];
  const menuRef = useRef(null);
  const { categories } = useSelector((state) => state.categories);
  const allCategories = categories.filter((item) => item.parentId === "null");
  const { favorites } = useSelector((state) => state.favorites);

  const handleResize = () => {
    setIsMenuOpen(window.innerWidth < 768 ? isMenuOpen : false);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const handleClickOutside = (e) => {
    if (
      e.target.tagName !== "SPAN" && e.target.tagName !== "BUTTON" && menuRef.current && !menuRef.current.contains(e.target)
    ) {
      setIsMenuOpen(false);
      setIsCategoriesOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };

  }, []);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  const handleBtnClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCategoriesOpen(false);

  };
  const handleLinkClick = (path) => {
    setIsCategoriesOpen(isCategoriesOpen ? false : null);
    dispatch(setPagePath(path));
    setIsMenuOpen(!isMenuOpen);
  };
  const handleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__container-top">
            <h2 className="header__container-top-title">
              Shipping only across Ukraine
            </h2>
            <NavLink
              className="header__company-logo"
              to="/"
              onClick={() => handleLinkClick("home")}
            >
              <Image
                cloudName={cloudinaryConfig.cloudName}
                publicId="main-logo_olx3ky"
                alt="main-logo"
              />
            </NavLink>
            <nav className={"header__nav-desktop"}>
              <ul className="header__nav-list">
                <li className="header__nav-item" key={1}>
                  <NavLink
                    className={`header__nav-link${pagePath === "home" ? "--active" : ""
                      }`}
                    onClick={() => handleLinkClick("home")}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                {pages.map((item, index) => (
                  <li className="header__nav-item" key={index + 1}>
                    <NavLink
                      className={`header__nav-link${pagePath === item.toLowerCase() ? "--active" : ""
                        }`}
                      onClick={() => handleLinkClick(item.toLowerCase())}
                      to={`/${item.toLowerCase()}`}
                    >
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="header__container-top-wrap">
              <Currency />
            </div>
          </div>
          <div className="header__container-bottom">
            <div className="header__container-burger-wrap">
              <button
                onClick={() => handleBtnClick()}
                className={`header__menu-btn${isMenuOpen ? "--active" : ""}`}
                type="button"
              >
                <span className="header__menu-lines"></span>
                <span className="header__menu-lines"></span>
                <span className="header__menu-lines"></span>
              </button>
            </div>
            <SearchBar />

            <NavLink
              className="header__company-logo"
              to="/"
              onClick={() => handleLinkClick("home")}
            >
              <Image
                cloudName={cloudinaryConfig.cloudName}
                publicId="main-logo_olx3ky"
                alt="main-logo"
              />
            </NavLink>
            {isMenuOpen ? <div className="backgroundNav"></div> : null}
            <nav
              ref={menuRef}
              className={`header__nav${isMenuOpen ? "--open" : ""}`}
            >
              <ul className="header__nav-list">
                <li className="header__nav-item" key={1}>
                  <NavLink
                    className={`header__nav-link${pagePath === "home" ? "--active" : ""
                      }`}
                    onClick={() => handleLinkClick("home")}
                    to={"/"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 576 512"
                      className="header__nav-link--icon"
                      style={{ fill: "#393d45" }}
                    >

                      <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z" />
                    </svg>
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className={`header__nav-item${isCategoriesOpen ? "--open" : ""}`} key={2}>
                  <div className="header__products-link-wrap">
                    <NavLink
                      className={`header__nav-link${pagePath === "products" ? "--active" : ""
                        }`}
                      onClick={() => handleLinkClick(1)}
                      to={"/products"}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 640 512"
                        className="header__nav-link--icon"
                        style={{ fill: "#393d45" }}
                      >
                        <path d="M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z" />
                      </svg>
                      <span>Products</span>
                    </NavLink>
                    <svg className={`header__nav-arrow${isCategoriesOpen ? "--open" : ""}`} onClick={() => handleCategories()} xmlns="http://www.w3.org/2000/svg" height="1.2em" style={{ fill: "#393d45" }} viewBox="0 0 384 512">
                      <path d="M32 64C14.3 64 0 49.7 0 32S14.3 0 32 0l96 0c53 0 96 43 96 96l0 306.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 402.7 160 96c0-17.7-14.3-32-32-32L32 64z" />
                    </svg>
                  </div>
                </li>
                {isCategoriesOpen && <ul className="header__mobile-categories">
                  <MobileCategory setIsMenuOpen={setIsMenuOpen} category={allCategories[0].id} />
                  <MobileCategory setIsMenuOpen={setIsMenuOpen} category={allCategories[1].id} />
                  <MobileCategory setIsMenuOpen={setIsMenuOpen} category={allCategories[2].id} />
                  <MobileCategory setIsMenuOpen={setIsMenuOpen} category={allCategories[3].id} />
                </ul>}
                <li className="header__nav-item" key={3}>
                  <NavLink
                    className={`header__nav-link${pagePath === "about" ? "--active" : ""
                      }`}
                    onClick={() => handleLinkClick(3)}
                    to={"/about"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 640 512"
                      className="header__nav-link--icon"
                      style={{ fill: "#393d45" }}
                    >

                      <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                    </svg>

                    <span>About</span>
                  </NavLink>
                </li>
              </ul>
              <div className="header__mobile-currency">
                <Currency />
              </div>
            </nav>

            <div className="header__nav-btn-wrap">
              <NavLink
                to={"/compare"}
                key={7}
                className="header__nav-link--fav"
              >
                <img
                  className="header__nav-fav scales-icon"
                  src="https://res.cloudinary.com/dfinki0p4/image/upload/v1690040128/scales2_a3fxya.svg"
                  alt="scales-img"
                />
                {compareProducts.length !== 0 ? <span className="header__nav-fav--count">{compareProducts.length}</span> : null}
              </NavLink>

              <NavLink to={"/wishlist"} key={4} className="header__nav-link--fav">
                <Image
                  cloudName={cloudinaryConfig.cloudName}
                  publicId="favorite_FILL0_eypcuo"
                  className="header__nav-fav"
                  alt="fav-logo"
                />
                {favorites.length >= 1 ? <span className="header__nav-fav--count">{favorites.length}</span> : null}

              </NavLink>
              <NavLink to={"/cart"} key={5} className="header__nav-link--cart">
                <Image
                  cloudName={cloudinaryConfig.cloudName}
                  publicId="shopping-cart_zfrcys"
                  className="header__nav-cart"
                  alt="cart-logo"
                />
                {cartQuantity.length >= 1 ? <span className="header__nav-fav--count">{cartQuantity.length}</span> : null}


              </NavLink>
              {/* <NavLink
                to={token ? "/cabinet" : "/login"}
                key={6}
                className="header__nav-link--loginBtn"
              > */}
                <NavLink
                to={token ? "/account" : "/login"}
                key={6}
                className="header__nav-link--loginBtn"
              >
                <Image
                  cloudName={cloudinaryConfig.cloudName}
                  publicId="icons8-account-64_emvkms"
                  className="header__nav-login"
                  alt="login-img"
                />

              </NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;