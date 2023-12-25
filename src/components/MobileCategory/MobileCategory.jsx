/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addSubCategory } from "../../redux/actions/subcategories";

const MobileCategory = ({ category, setIsMenuOpen }) => {
   const { categories } = useSelector((state) => state.categories);
   const [isCategoryOpen, setCategoryOpen] = useState(false);
   const subCategories = categories.filter((item) => item.parentId === category);

   const dispatch = useDispatch();

   const handleCategoryClick = (name) => {
      dispatch(addSubCategory(name));
      setIsMenuOpen(false);
   };
   const hanldeLinkClick = (e) => {
      if (e.target.tagName === "svg" || e.target.tagName === "path") {
         setCategoryOpen(!isCategoryOpen);
      } else {
         setIsMenuOpen(false);
      }
   };

   return (
      <>
         <li onClick={(e) => hanldeLinkClick(e)} className="header__mobile-category">
            {category}
            <svg className={`header__mobile-category-btn${isCategoryOpen ? "--open" : ""}`} xmlns="http://www.w3.org/2000/svg" height="1.2em" style={{ fill: "#393d45" }} viewBox="0 0 384 512">
               <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
            </svg>
         </li>
         {isCategoryOpen && <ul className="header__mobile-subcategory-list">
            {subCategories.map((item, id) => (
               <NavLink key={id} to={`${item.parentId}`}>
                  <li key={id} className="header__mobile-subcategory-item" onClick={() => handleCategoryClick(item.name)}>
                     {item.name}
                  </li>
               </NavLink>
            ))}
         </ul>}
      </>
   );
};

export default MobileCategory;
