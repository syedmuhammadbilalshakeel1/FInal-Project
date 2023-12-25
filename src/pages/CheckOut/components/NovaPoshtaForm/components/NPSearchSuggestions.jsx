function NPSearchSuggestions({ searchResultArray, selectHandler, closeHandler }) {
  return (
    <>
      <ul className="np-delivery__suggestions">
        {!searchResultArray.length ? <li className="np-delivery__suggestions-error">Nothing found!</li> : null}
        {searchResultArray.map((elem) => {
          return (
            <li
              className="np-delivery__suggestions-item"
              key={elem.CityID || elem.SiteKey}
              onClick={() => {
                selectHandler(elem.Description);
              }}
            >
              {elem.Description}
            </li>
          );
        })}
      </ul>
      <div
        className="np-delivery__suggestions-bg"
        onClick={() => {
          closeHandler(false);
        }}
      ></div>
    </>
  );
}

export default NPSearchSuggestions;
