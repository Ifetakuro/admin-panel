import { Fragment } from "react";
import ReactDOM from "react-dom";
import "../scss/components/Modal.scss";
import { Backdrop, portalElement } from "./Backdrop";

const ModalOverlay = ({ children, extraclass }) => {
  return <div className={`modal ${extraclass}`}>{children}</div>;
};

const Modal = ({ onClose, children, extraclass }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay extraclass={extraclass}>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
