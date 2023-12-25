import PreLoader from "../../../../../components/PreLoader/PreLoader";

function NPSerachLoader() {
  return (
    <div className="np-delivery__suggestions np-delivery__suggestions-loader">
      <PreLoader fillScreen={false} height={50} width={100} background={false} />
    </div>
  );
}

export default NPSerachLoader;
