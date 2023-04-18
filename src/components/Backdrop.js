import "../scss/components/Modal.scss";

export const Backdrop = ({ onClose }) => {
  return <div className="backdrop" onClick={onClose}></div>;
};

export const portalElement = document.getElementById("overlay");
