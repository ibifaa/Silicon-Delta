import { Link } from "react-router-dom";

const ViewCard = ({ view, viewPadding }) => {
  return (
    <Link
      to={view.link || ""}
      className={`view-card ${viewPadding && viewPadding}`}
    >
      <div className="view-card-image">
        <img src={view.image} alt={view.name} />
      </div>
      <div className="view-card-board">
        <p className="view-card-name">{view.name}</p>
        <p className="view-card-active">{view.active} active members</p>
      </div>
    </Link>
  );
};

export default ViewCard;
