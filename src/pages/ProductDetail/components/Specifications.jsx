export default function Specifications({properties: {color, brand, ...specs}}) {
  function formatLabel(string) {
    if (string === string.toLowerCase()) return string;

    const upperCaseChar = [...string].find((char) => char === char.toUpperCase() && char !== " ");
    let formattedString = string.split(upperCaseChar).join(` ${upperCaseChar.toLowerCase()}`);
    return formatLabel(formattedString);
  }

  return <div className="product-detail__specs-block" id="techSpecs">
    <h3 className="product-detail__specs-title">Specifications</h3>
    <table className="product-detail__specs-table">
      <tbody className="product-detail__specs-list">
      {Object.entries(specs).map(([key, value], index) => <tr key={index} className="product-detail__specs-item"><td className="product-detail__specs-data">{formatLabel(key)}:</td><td className="product-detail__specs-data product-detail__specs-data--value">{value.toString()}</td></tr>)}
      </tbody>
    </table>
  </div>;
}