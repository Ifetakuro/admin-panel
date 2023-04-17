import React from "react";
import TicketCard from "../components/TicketCard";
import "../scss/Pages/Tickets.scss";
import { useState } from "react";
import TicketForm from "../components/TicketForm";
import { Role } from "../authentication/Role";

function Tickets() {
  const [isNewTicket, setIsNewTicket] = useState(false);

  let authRole;
  let ROLE;

  const _user = localStorage.getItem("user");

  if (_user) {
    authRole = JSON.parse(_user).role;
  }

  if (authRole === Role.Manager) {
    ROLE = "MANAGER";
  } else if (authRole === Role.Admin) {
    ROLE = "ADMIN";
  }
  return (
    <main>
      {ROLE && (
        <div>
          only manager and admin can add new tickets
          <button onClick={() => setIsNewTicket(!isNewTicket)}>
            Add new ticket
          </button>
          {isNewTicket && <TicketForm />}
        </div>
      )}

      <div className="tickets">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </main>
  );
}

export default Tickets;
