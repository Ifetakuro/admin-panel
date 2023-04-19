import { MdEdit } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import "../scss/components/TicketCard.scss";

function TicketCard({
  title,
  description,
  assigner,
  assignee,
  date,
  onDeleteClick,
  onEditClick,
  edited,
  role,
}) {
  return (
    <div className="ticket-card">
      <div className="ticket-card-header">
        <h3>
          {title} {edited && <span>(Edited)</span>}
        </h3>
        {role !== "DEVELOPER" && (
          <div className="ticket-card-btn">
            <MdEdit onClick={onEditClick} />
            <RiDeleteBinFill onClick={onDeleteClick} />
          </div>
        )}
      </div>
      <div className="description">
        <p>{description}</p>
        <div className="assign">
          <div>
            <h5>Assigner</h5>
            <p>{assigner}</p>
          </div>
          <div>
            <h5>Assignee</h5>
            <p>{assignee}</p>
          </div>
        </div>
        <p className="date">Date Assigned: {date}</p>
      </div>
    </div>
  );
}

export default TicketCard;
