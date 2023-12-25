/* eslint-disable no-plusplus */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllSubcategoriesCounter } from "../../../redux/actions/counterFilter";

const ProductsCategoriesForm = (
    {
        categories,
        checkedItems,
        handleCheckboxChange,
        addCounter
    }
    ) => {
      const dispatch = useDispatch();
      useEffect(() => {
        const checkboxes = document.querySelectorAll("input[type='checkbox']");
        let checkedCount = 0;
        checkboxes.forEach((checkbox) => {
          if (checkbox.checked) {
            checkedCount++;
          }
        });
        dispatch(getAllSubcategoriesCounter(checkedCount));
      });
    return (
        <>
        <h4 className="filter-section__subtitle">Product Category</h4>
          <form className="filter-section-list">
            {
              categories
                .map((item, index) => (
                  <div key={item.name} className="filter-section-list__item">
                    <label htmlFor={item.name}>{item.name}</label>
                    <input
                      id={item.name}
                      name={item.name}
                      type="checkbox"
                      checked={checkedItems[index]}
                      onChange={(e) => handleCheckboxChange(e, index)}
                      onClick={addCounter}
                      className="filter-section-list__item-checkbox"></input>
                  </div>))
            }
          </form>
        </>
    );
};

export default ProductsCategoriesForm;
