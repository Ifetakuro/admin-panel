import React from "react";
import TicketCard from "../components/TicketCard";
import "../scss/Pages/Tickets.scss";
import { useState } from "react";
import TicketForm from "../components/TicketForm";
import { Role } from "../authentication/Role";
import { MdAdd } from "react-icons/md";
import CustomButton from "../components/CustomButton";
import { useContext } from "react";
import { AuthContext } from "../authentication/AuthContext";
import ConfirmDelete from "../components/ConfirmDelete";
import EditTicketModal from "../components/EditTicketModal";
import { json } from "react-router-dom";
import { useEffect } from "react";

function Tickets() {
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketTitle, setTicketTitle] = useState("");
  const [assignee, setAssignee] = useState("");
  const [isNewTicket, setIsNewTicket] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [ticketId, setTicketId] = useState(null);
  const [deleting, setdeleting] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [editedTicket, setEditedTicket] = useState({});
  const [savingEdit, setSavingEdit] = useState(false);

  let authRole;
  let ROLE;
  let assigner;

  const _user = localStorage.getItem("user");
  const _tickets = JSON.parse(localStorage.getItem("tickets"));

  if (_user) {
    authRole = JSON.parse(_user).role;
    let fName = JSON.parse(_user).firstName;
    let lName = JSON.parse(_user).lastName;

    assigner = fName + " " + lName;
  }

  if (authRole === Role.Manager) {
    ROLE = "MANAGER";
  } else if (authRole === Role.Admin) {
    ROLE = "ADMIN";
  }

  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const id = Math.floor(Math.random() * (9000 - 1000 + 1) + 1000);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      id: id,
      title: ticketTitle,
      description: ticketDescription,
      assigner: assigner,
      assignee: assignee,
      date: date,
      edited: false,
    };

    setTickets((prevState) => [newTicket, ...prevState]);
    if (_tickets) {
      localStorage.setItem("tickets", JSON.stringify([newTicket, ..._tickets]));
    } else {
      localStorage.setItem("tickets", JSON.stringify([newTicket]));
    }
    setTicketDescription("");
    setTicketTitle("");
    setAssignee("");
  };

  const toggleNewTicket = () => {
    setIsNewTicket(!isNewTicket);
  };

  const toggleConfirmDel = () => setConfirmDelete(!confirmDelete);
  const toggleEditModal = () => setEditIsOpen(!editIsOpen);

  const onOpenDeleteModal = (id) => {
    toggleConfirmDel();
    setTicketId(id);
  };

  const onOpenEditModal = (ticket) => {
    toggleEditModal();
    setEditedTicket(ticket);
  };

  const onDeleteHandler = () => {
    setdeleting(true);

    setTimeout(() => {
      setdeleting(false);
      toggleConfirmDel();

      setTickets((prevState) =>
        prevState.filter((ticket) => ticket.id !== ticketId)
      );
    }, 1000);

    if (_tickets.length > 1) {
      const removedDeletedTicket = _tickets;
      const index = _tickets.findIndex((ticket) => ticket.id === ticketId);
      removedDeletedTicket.splice(0, index);
      localStorage.setItem("tickets", JSON.stringify(removedDeletedTicket));
    }
    if (_tickets.length === 1) {
      localStorage.removeItem("tickets");
    }
  };

  const onSaveEditedTicket = (id, updatedTicket) => {
    setSavingEdit(true);

    const updatedTickets = tickets.map((ticket) =>
      ticket.id === id ? updatedTicket : ticket
    );

    setTimeout(() => {
      setSavingEdit(false);
      toggleEditModal();

      setTickets(updatedTickets);
      localStorage.setItem("tickets", JSON.stringify(updatedTickets));
    }, 1000);
  };

  useEffect(() => {
    if (_tickets) {
      setTickets(_tickets);
    }
  }, []);

  return (
    <div className="tickets">
      {confirmDelete && (
        <ConfirmDelete
          onHideDelete={toggleConfirmDel}
          onCancel={toggleConfirmDel}
          onDelTicket={onDeleteHandler}
          deleting={deleting}
        />
      )}
      {editIsOpen && (
        <EditTicketModal
          onHideEdit={toggleEditModal}
          editedTicket={editedTicket}
          onSaveEdit={onSaveEditedTicket}
          submitting={savingEdit}
          onClick={toggleEditModal}
        />
      )}
      {ROLE ? (
        <div>
          {!isNewTicket && (
            <div>
              <CustomButton
                onClick={toggleNewTicket}
                extraClass={"add-ticket-btn"}
              >
                <MdAdd />
                Add new ticket
              </CustomButton>
            </div>
          )}
          {isNewTicket && (
            <TicketForm
              title={"Create New Ticket"}
              onClick={toggleNewTicket}
              ticketDescription={ticketDescription}
              setTicketDescription={setTicketDescription}
              ticketTitle={ticketTitle}
              setTicketTitle={setTicketTitle}
              assignee={assignee}
              setAssignee={setAssignee}
              handleSubmit={handleSubmit}
              extraClass={"slide"}
              submitBtnText={"Add"}
            />
          )}
        </div>
      ) : (
        <div>
          <p>Ask admin or manager to assign tickets to you</p>
        </div>
      )}

      <hr />

      {tickets.length > 0 ? (
        <div className="ticket-cards">
          {tickets?.map((ticket) => (
            <TicketCard
              key={ticket.id}
              title={ticket.title}
              description={ticket.description}
              assigner={ticket.assigner}
              assignee={ticket.assignee}
              date={ticket.date}
              onDeleteClick={() => onOpenDeleteModal(ticket.id)}
              onEditClick={() => onOpenEditModal(ticket)}
              edited={ticket.edited}
              role={authRole}
            />
          ))}
        </div>
      ) : (
        <div className="no-tickets">
          <p>No tickets assigned</p>
        </div>
      )}
    </div>
  );
}

export default Tickets;
