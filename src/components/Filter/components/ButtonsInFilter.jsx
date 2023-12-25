const ButtonsInFilter = ({
    errorText, isButtonDisabled, handleSetPrice, resetBtn, resetBtnClick, apply
}) => {
    return (
        <>
        <p ref={errorText} className="filter-section-inputs__error-text">Min price cannot be higher than max.</p>
           <button
            type="button"
            className={`filter-section-btn ${isButtonDisabled ? "filter-section-btn--disabled" : "filter-section-btn--dark"}`}
            onClick={handleSetPrice}
            disabled={isButtonDisabled}>Set Price
          </button>
          <div className="filter-section-btn-container">
            <button type="button" ref={resetBtn} onClick={resetBtnClick} className="filter-section-btn filter-section-btn--light">Clear Filter</button>
            <button type="button" onClick={apply} className="filter-section-btn filter-section-btn--dark filter-section-btn--apply">Apply</button>
          </div>
        </>
    );
};

export default ButtonsInFilter;
