import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Image } from "cloudinary-react";
import cloudinaryConfig from "../../config/cloudinaryConfig";
import setCurrency from "../../redux/actions/currency";

const Currency = () => {
   const dispatch = useDispatch();
   const [allCurrencies, setAllCurrencies] = useState([]);
   const [value, setValue] = useState("USD");
   const { rates } = allCurrencies;
   const values = ["USD", "UAH", "EUR", "PLN"];

   useEffect(() => {
      fetch("https://openexchangerates.org/api/latest.json?app_id=4cf97350f69e47a9ac7722d0086f67b8")
         .then((response) => response.json())
         .then((data) => setAllCurrencies(data));
   }, [value]);

   useEffect(() => {
      if (rates && rates[value]) {
         dispatch(setCurrency(rates[value].toFixed(2), value));
      }
   }, [value, rates]);

   const handleChange = (e) => {
      setValue(e.target.value);
   };

   return (
      <>
         <Image
            cloudName={cloudinaryConfig.cloudName}
            publicId="https://res.cloudinary.com/dfinki0p4/image/upload/v1689412937/currency/currency-icon_hqlbjj.png"
            alt=""
            className="currency__icon"
         />
         <select className="currency" value={value} onChange={(e) => handleChange(e)} name="currency" id="currency">
            {values.map((val, index) => (
               <option key={index} value={val}>{val}</option>
            ))}
         </select>
         <img className="currency__img" src={`https://res.cloudinary.com/dfinki0p4/image/upload/v1689595259/currency/${value}.png`} alt="ere" />
      </>
   );

};
export default Currency;