import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext } from "../authentication/AuthContext";
import "../scss/components/TicketForm.scss";
import CustomButton from "./CustomButton";

const TicketForm = ({
  title,
  handleSubmit,
  ticketTitle,
  setTicketTitle,
  ticketDescription,
  setTicketDescription,
  assignee,
  setAssignee,
  onClick,
  extraClass,
}) => {
  const { users } = useContext(AuthContext);
  const disable =
    ticketTitle.length < 6 || ticketDescription < 10 || assignee === "";

  return (
    <div className={`ticket-form-div ${extraClass}`}>
      <h3 className="ticket-fh">{title}</h3>
      <form onSubmit={handleSubmit} className={"ticket-form"}>
        <div>
          <label htmlFor="ticketTitle">Title:</label>
          <input
            type="text"
            name=""
            id="ticketTitle"
            value={ticketTitle}
            onChange={(e) => setTicketTitle(e.target.value)}
            placeholder="Ticket Title"
            required
          />
        </div>
        <div>
          <label htmlFor="ticketDescription">Description:</label>
          <textarea
            name="ticketDescription"
            id="ticketDescription"
            value={ticketDescription}
            onChange={(e) => setTicketDescription(e.target.value)}
            maxLength={100}
            placeholder="Describe the task"
            required
          />
        </div>
        <div>
          <label htmlFor="assignee">Assign To:</label>
          <select
            name="assignee"
            id="assignee"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
            required
          >
            <option value="Nil">No Assignee</option>
            {users.map((user) => (
              <option
                key={user.id}
                value={`${user.firstName} ${user.lastName}`}
              >
                {user.firstName} {user.lastName}
              </option>
            ))}
          </select>
        </div>
        <div className="btn-div">
          <CustomButton type="submit" disabled={disable}>
            Add
          </CustomButton>
          <CustomButton type="button" onClick={onClick}>
            Close Form
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
