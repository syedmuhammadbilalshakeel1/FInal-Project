import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";
import cloudinaryConfig from "../../../config/cloudinaryConfig";

const UserAccountSkeleton = () => {
  return (
    <div className={"orderlist__skeleton"}>
      <p className={"orderlist__skeleton-text"}>
        There are no recent orders to show!
      </p>
      <Image
        className={"orderlist__skeleton-img"}
        cloudName={cloudinaryConfig.cloudName}
        publicId="https://res.cloudinary.com/dfinki0p4/image/upload/v1691062276/noOrders_ueglh7.jpg"
        alt="orderlist is empty"
      />
      <p className={"orderlist__skeleton-text"}>
        Run to the e-store for great offers.
      </p>
      <Link className={"cart__skeleton-link"} to={"/products"}>
        Continue Shopping
      </Link>
    </div>
  );
};

export default UserAccountSkeleton;
