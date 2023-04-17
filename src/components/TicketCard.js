import "../scss/components/TicketCard.scss";

function TicketCard() {
  return (
    <div className="ticket-card">
      <h3>Add new feature to sidebar</h3>
      <div className="description">
        <p>User should be able to click on the button on the side bar</p>
        <div className="assign">
          <div>
            <h5>Assigner</h5>
            <p>Ayoluwa Kitty</p>
          </div>
          <div>
            <h5>Assignee</h5>
            <p>Tiki Owa</p>
          </div>
        </div>
        <p className="date">Date Assigned: 3rd November, 2021</p>
      </div>
    </div>
  );
}

export default TicketCard;
