import BenefitsItem from "../OurBenefitsItem/OurBenefitsItem";

const Benefits = (props) => {
    return (
        <section className="benefits-section">
            <div className="container">
                <h2 className="section-title section-title__benefits-section">Benefits Using Our Service</h2>
                <ul className="benefits-section-list">
                   {props.content.map((item, index) => <BenefitsItem key={index} data={item} />)}
                </ul>
            </div>
        </section>
    );
};

export default Benefits;
