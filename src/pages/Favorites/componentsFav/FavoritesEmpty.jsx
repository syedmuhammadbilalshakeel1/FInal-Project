import { NavLink } from "react-router-dom";

const FavoritesEmpty = () => {
    return (
        <div className="fav-empty">
            <img className="fav-empty__img" src="https://res.cloudinary.com/dfinki0p4/image/upload/v1690293879/empty-fav_osxws3.png" alt="fav-img" />
            <p className={"cart__skeleton-text fav-empty__text"}>Your wish list is empty</p>
            <NavLink to={"/products"}>
                <button className="fav-empty__btn" type="button">Add Products</button></NavLink>
        </div>
    );
};

export default FavoritesEmpty;
