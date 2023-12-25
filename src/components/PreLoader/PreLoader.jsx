/* eslint-disable object-curly-newline */
import { Dna } from "react-loader-spinner";

function PreLoader({ fillScreen, width = 200, height = 200, background = true }) {
  return background ? (
    <div className={fillScreen ? "loader-wrapper fill-screen" : "loader-wrapper"}>
      <Dna height={height} width={width} ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="" />
    </div>
  ) : (
    <Dna height={height} width={width} ariaLabel="dna-loading" wrapperStyle={{}} wrapperClass="" />
  );
}

export default PreLoader;
