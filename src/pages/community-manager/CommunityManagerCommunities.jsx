import CommunityManagerLayout from "../../components/community-manager/CommunityManagerLayout";

import manWoman from "../../assets/man-woman.png";
import threeHuman from "../../assets/three-humans.png";
import { Link } from "react-router-dom";

const CommunityManagerCommunities = () => {
  const views = [
    {
      name: "SD Community",
      image: manWoman,
      active: 180,
    },
    {
      name: "SD Development Community",
      image: threeHuman,
      active: 180,
    },
    {
      name: "SD Community",
      image: manWoman,
      active: 180,
    },
    {
      name: "SD Development Community",
      image: threeHuman,
      active: 180,
    },
  ];

  return (
    <CommunityManagerLayout>
      <section style={{ marginBottom: "30px" }}>
        <div>
          <h1 className="view-title">Communities</h1>
          <div className="view">
            {views.map((view, index) => (
              <Link
                key={index}
                to={view.link || ""}
                className="community-view-card view-padding"
              >
                <div className="community-view-card-image">
                  <img src={view.image} alt={view.name} />
                </div>
                <div className="view-card-board">
                  <p className="view-card-name">{view.name}</p>
                  <p className="view-card-active">
                    {view.active} active members
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </CommunityManagerLayout>
  );
};

export default CommunityManagerCommunities;
