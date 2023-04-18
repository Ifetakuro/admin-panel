import ReactDOM from "react-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Backdrop, portalElement } from "./Backdrop";
import { Fragment } from "react";

const override = {
  display: "block",
  borderColor: "#fff",
  position: "fixed",
  top: "50%",
  left: "calc(50% - 1rem)",
  transform: "translate(-50%, -50%)",
  zIndex: 100,
};

const LoaderOverlay = () => {
  return <ClipLoader cssOverride={override} aria-label="Loading Spinner" />;
};

const Loader = () => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<LoaderOverlay />, portalElement)}
    </Fragment>
  );
};

export default Loader;
