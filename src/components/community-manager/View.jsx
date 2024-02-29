import "./view.css";
import ViewCard from "./ViewCard";

const View = ({ title, views, viewPadding }) => {
  return (
    <div>
      <h1 className="view-title">{title}</h1>
      <div className="view">
        {views.map((view, index) => (
          <ViewCard key={index} view={view} viewPadding={viewPadding} />
        ))}
      </div>
    </div>
  );
};

export default View;
