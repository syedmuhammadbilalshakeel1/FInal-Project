import { useState, useEffect } from "react";
import { Store } from "react-notifications-component";
import useServer from "../../../hooks/useServer";
import notificationsSettings from "../../../constants/constants";


const ProductsPricesForm = (
    {
        minArr,
        maxArr,
        minPrice,
        maxPrice,
        setValuesPrice,
        handlePriceBlur
     }
) => {
    const server = useServer();
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        async function fetchFilters() {
          try {
            const filterResponse = await server.getFilters();
            setFilters(filterResponse);
          } catch (err) {
            Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: err.message });
    
          }
        }
        fetchFilters();
      }, []);

      function handleSetValue(e) {
        const { name, value } = e.target;
        const onlyDigits = value.replace(/\D/g, "");
        setValuesPrice((prevState) => ({ ...prevState, [name]: onlyDigits }));
      }

    return (
        <>
            <h4 className="filter-section__subtitle">Price range</h4>
          <form className="filter-section-inputs">
            {
              filters.length !== 0 ? filters.map(({ name }, idx) => (
                <input
                  key={idx}
                  className={"filter-section-inputs__item"}
                  placeholder={(name === "Min") ? `${name} ${minArr}` : `${name} ${maxArr}`}
                  name={name}
                  type="number"
                  step="1"
                  min="0"
                  value={name === "Max" ? maxPrice : minPrice}
                  onChange={handleSetValue}
                  onBlur={handlePriceBlur}></input>
              )) : <p>loading...</p>
            }
          </form>
        </>
    );
};

export default ProductsPricesForm;
