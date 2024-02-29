import CommunityManagerLayout from "../../components/community-manager/CommunityManagerLayout";

import profilelogo from "../../assets/default-profile.png";

const CommunityManagerSettings = () => {
  return (
    <CommunityManagerLayout>
      <div className="settings-page">
        <center>
          <img src={profilelogo} alt="profile" className="profile-image" />
          <h3>ImaChrist Davies</h3>
          <p>Community Manager</p>
          <p>Imachristt328@gmail.com</p>
        </center>
        <br />
        <hr />
        <br />

        <div className="settings-page-buttons">
          <button type="button" className="edit">
            Edit profile
          </button>
          <button type="button" className="password">
            Change password
          </button>
        </div>
      </div>
    </CommunityManagerLayout>
  );
};

export default CommunityManagerSettings;
