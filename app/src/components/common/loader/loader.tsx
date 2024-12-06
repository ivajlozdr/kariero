import { FC, Fragment } from "react";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => (
  <Fragment>
    <div id="loader">
      <img src="../assets/images/media/loader.svg" alt="" />
    </div>
  </Fragment>
);

export default Loader;

// --- КиноКомпас ---
// import { FC } from "react";
// import logo_loader from "../../../assets/images/brand-logos/logo_loader.png";

// const Loader: FC = () => {
//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center space-y-4 text-center">
//       <img src={logo_loader} alt="loading" className="spinner" />
//       <p className="text-xl">Зареждане...</p>
//     </div>
//   );
// };

// export default Loader;
// --- КиноКомпас ---
