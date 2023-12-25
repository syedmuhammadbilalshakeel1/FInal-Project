import { NavLink } from "react-router-dom";

const CompareEmpty = () => {
    return (
        <div className="compare-section-empty">
            <img className="compare-section-empty__img" src="https://res.cloudinary.com/dfinki0p4/image/upload/v1690039482/cat_k3mth4.svg" alt="compare-img" />
            <p className={"cart__skeleton-text fav-empty__text"}>Your comparison list is empty</p>
            <NavLink to={"/products"}><button className="fav-empty__btn" type="button">Add Products</button></NavLink>
        </div>
    );
};

export default CompareEmpty;
