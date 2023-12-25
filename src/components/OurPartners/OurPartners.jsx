import { useState, useEffect } from "react";
import { Store } from "react-notifications-component";
import notificationsSettings from "../../constants/constants";
import useServer from "../../hooks/useServer";
import Skeleton from "./Skeleton";

const OurPartners = () => {
   const server = useServer();
   const [partners, setPartners] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      async function fetchPartners() {
         setIsLoading(true);
         try {
            const ourPartners = await server.getPartners();
            setPartners(ourPartners);
            setIsLoading(false);
         } catch (error) {
            Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: error.message });
         }
      }
      fetchPartners();
   }, []);
   return (
      <>
         <section className="our-partners">
            <div className="container">
               <h2 className="our-partners__title section-title">Our Partners</h2>
               <ul className="our-partners__list">
                  {!isLoading ? partners.map(({ imageUrl, url }, index) => {
                     return (
                        <li className="our-partners__item" key={index}>
                           <a href={url} className="our-partners__link" target="blank">
                              <img className={`our-partners__logo${index === 3 ? "--last" : ""}`} src={imageUrl} alt="partner-logo" />
                           </a>
                        </li>
                     );
                  }) : [...new Array(4)].map((_, index) => <Skeleton key={index} />)}
               </ul>
            </div>
         </section>
      </>
   );
};
export default OurPartners;