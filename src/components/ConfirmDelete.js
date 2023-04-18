import React from "react";
import Modal from "./Modal";
import CustomButton from "./CustomButton";
import "../scss/components/ConfirmDelete.scss";
import { ImCancelCircle } from "react-icons/im";
import Loader from "./Loader";

const ConfirmDelete = ({ onHideDelete, onCancel, onDelTicket, deleting }) => {
  if (deleting) {
    return <Loader />;
  } else {
    return (
      <Modal onClose={onHideDelete} extraclass={"confirm-delete"}>
        <h4>Are you sure you want to delete this ticket?</h4>
        <div className="svg">
          <ImCancelCircle />
        </div>
        <div className="btns">
          <CustomButton onClick={onCancel}>No</CustomButton>
          <CustomButton onClick={onDelTicket}>Yes</CustomButton>
        </div>
      </Modal>
    );
  }
};

export default ConfirmDelete;
