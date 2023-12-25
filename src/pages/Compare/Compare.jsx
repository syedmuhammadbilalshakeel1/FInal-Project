import { useSelector } from "react-redux";
import CompareEmpty from "./CompareEmpty";
import CompareFull from "./CompareFull";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

const Compare = () => {
    const { compareProducts } = useSelector((state) => state.compareProducts);
    return (
        <>
            <BreadCrumb />
            <section className="compare-section">
                <div className="container">
                    {!compareProducts.length ? <CompareEmpty /> : <CompareFull />}
                </div>
            </section>
        </>

    );
};

export default Compare;
