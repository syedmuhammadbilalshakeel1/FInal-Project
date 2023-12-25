const BenefitsItem = (props) => {

    return (
        <li className="benefits-section-list__item">
            <div className="photo-container">
               <img alt="icon_benefits" src={props.data.src} className="benefits-section-list__item-img" width={40} height={40}></img>
               <div className="background"></div>
            </div>
                
                <h3 className="benefits-section-list__item-title">{props.data.title}</h3>
            <p className="benefits-section-list__item-text">{props.data.text}</p>
        </li>
    );
};
export default BenefitsItem;
