import { Link } from "react-router-dom";

const PermissionDenied = () => {
  return (
    <div className="denied">
      <h2>Permission denied!</h2>
      <p>You do not have access to this page</p>
      <Link to={"/"}>Please return to dashboard</Link>
    </div>
  );
};

export default PermissionDenied;
