import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Store } from "react-notifications-component";
import { useDispatch } from "react-redux";
import useServer from "../../hooks/useServer";
import PreLoader from "../../components/PreLoader/PreLoader";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";
import Gallery from "./components/Gallery";
import Specifications from "./components/Specifications";
import OrderActions from "./components/OrderActions";
import Description from "./components/Description";
import notificationsSettings from "../../constants/constants";
import { getRecentlyProducts } from "../../redux/actions/recentlyProducts";
import Comments from "../../components/Comments/Comments";

export default function ProductDetail() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [productData, setProductData] = useState({});
  const { _id: productID } = productData;

  const { itemNo } = useParams();
  const { getProduct } = useServer();
  const dispatch = useDispatch();

  async function fetchProduct(productItemNo) {
    try {
      const data = await getProduct(productItemNo);
      setProductData(data);
      setIsLoaded(true);
    } catch (error) {
      Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: error.message });
    }
  }

  useEffect(() => {
    setIsLoaded(false);
    dispatch(getRecentlyProducts(itemNo));
    fetchProduct(itemNo);
  }, [itemNo]);

  if (!isLoaded) return <PreLoader />;

  return (
    <>
      <BreadCrumb />
      <section className="product-detail-section">
        <div className="container">
          <div className="product-detail__wrap">
            <Gallery {...productData} />
            <div className="product-detail__info-wrap">
              <Description {...productData} />
              <OrderActions {...productData} />
            </div>
          </div>
          <Specifications {...productData} />
        </div>
      </section>
      <Comments productID={productID} />
    </>
  );
}
