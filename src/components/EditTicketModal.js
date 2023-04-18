import Loader from "./Loader";
import Modal from "./Modal";
import TicketForm from "./TicketForm";
import "../scss/components/EditTicketModal.scss";
import { useState } from "react";

const EditTicketModal = ({
  onHideEdit,
  submitting,
  onSaveEdit,
  editedTicket,
  onClick,
}) => {
  const [editedTicketDescription, setEditedTicketDescription] = useState(
    editedTicket.description
  );
  const [editedTicketTitle, setEditedTicketTitle] = useState(
    editedTicket.title
  );
  const [editedAssignee, setEditedAssignee] = useState(editedTicket.assignee);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTicket = {
      ...editedTicket,
      title: editedTicketTitle,
      description: editedTicketDescription,
      // assigner: assigner,
      assignee: editedAssignee,
      edited: true,
    };

    onSaveEdit(editedTicket.id, updatedTicket);
  };

  if (submitting) {
    return <Loader />;
  } else {
    return (
      <Modal onClose={onHideEdit} extraclass={"edit-ticket-modal"}>
        <TicketForm
          title={"Edit Ticket"}
          handleSubmit={handleSubmit}
          ticketTitle={editedTicketTitle}
          setTicketTitle={setEditedTicketTitle}
          ticketDescription={editedTicketDescription}
          setTicketDescription={setEditedTicketDescription}
          assignee={editedAssignee}
          setAssignee={setEditedAssignee}
          onClick={onClick}
        />
      </Modal>
    );
  }
};
export default EditTicketModal;
