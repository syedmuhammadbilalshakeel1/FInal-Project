/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "react-notifications-component";
import notificationsSettings from "../../constants/constants";

import useServer from "../../hooks/useServer";
import { removeCompareProducts, deleteAllCompareProducts } from "../../redux/actions/compareProducts";

const CompareFull = () => {
    const { compareProducts } = useSelector((state) => state.compareProducts);
    const server = useServer();
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchCompareProducts() {
            try {
                const resultCompareProducts = await Promise.all(compareProducts.map((product) => server.getProduct(product)));
                setProducts(resultCompareProducts);
            } catch (err) {
                Store.addNotification({ ...notificationsSettings.basic, ...notificationsSettings.error, message: err.message });
            }
        }
        fetchCompareProducts();
    }, [compareProducts]);

    function removeCompareProductsfromTable(itemNo) {
        dispatch(removeCompareProducts(itemNo));
    }

    function removeAllCompareProductsFromTable() {
        dispatch(deleteAllCompareProducts());
    }

    return (
        <div className="compare-section-full">
            <div className="compare-section-full-btn-wrapper">
                <NavLink to={"/products"}><button className="compare-section-btn" type="button">Add products</button></NavLink>
                <button onClick={() => removeAllCompareProductsFromTable()} className="compare-section-btn" type="button">Delete all products</button>
            </div>
            <div className="compare-section-full-wrapper-table">
                <table className="compare-section-full-table">
                    <thead>
                        <tr>
                            <th> <img src="https://res.cloudinary.com/dfinki0p4/image/upload/v1690070806/scales_po4dg5.png" alt="" className="compare-section-full__scales" /></th>
                            {products.map((item, idx) => {
                                return (
                                    <th key={idx}>
                                        <div className="compare-section-full-item__header">
                                            <NavLink
                                                to={`/products/${item.itemNo}`}
                                                className="compare-section-full-item__img--wrap">
                                                <img
                                                    className="compare-section-full-item__img"
                                                    src={item.imageUrls[0]}
                                                    alt={"product"}
                                                ></img>
                                            </NavLink>
                                            <button
                                                className="compare-section-full-item__closebtn"
                                                onClick={() => removeCompareProductsfromTable(item.itemNo)}
                                                type={"button"}
                                            ></button>
                                        </div>
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            {products.map((item, idx) => {
                                return <td key={idx}>
                                    <NavLink className="compare-section__item-name" to={`/products/${item.itemNo}`}>{item.name}</NavLink>
                                </td>;
                            })}
                        </tr>
                        <tr>
                            <td>Brand</td>
                            {products.map((item, idx) => {
                                return <td key={idx}>{item.properties.brand}</td>;
                            })}
                        </tr>
                        <tr>
                            <td>Color</td>
                            {products.map((item, idx) => {
                                return <td key={idx}>{item.properties.color}</td>;
                            })}
                        </tr>
                        <tr>
                            <td>Type</td>
                            {products.map((item, idx) => {
                                return <td key={idx}>{item.properties.type}</td>;
                            })}
                        </tr>
                        <tr>
                            <td>Connection</td>
                            {products.map((item, idx) => {
                                return <td key={idx}>{item.properties.connection}</td>;
                            })}
                        </tr>
                        <tr>
                            <td>Quantity</td>
                            {products.map((item, idx) => {
                                return <td key={idx}>{item.quantity}</td>;
                            })}
                        </tr>
                        <tr>
                            <td>Categories</td>
                            {products.map((item, idx) => {
                                return <td key={idx}>{item.categories}</td>;
                            })}
                        </tr>
                        <tr>
                            <td>Current Price</td>
                            {products.map((item, idx) => {
                                return <td key={idx}>{item.currentPrice}</td>;
                            })}
                        </tr>
                        <tr>
                            <td>Previous Price</td>
                            {products.map((item, idx) => {
                                return <td key={idx}>{item.previousPrice}</td>;
                            })}
                        </tr>
                        <tr>
                            <td>Noise Cancelling</td>
                            {products.map((product, idx) => {
                                return <td key={idx}>{product.properties.noiseCancellation === true ? "+" : "-"}</td>;
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default CompareFull;
