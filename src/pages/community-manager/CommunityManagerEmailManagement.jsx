import React from "react";
import CommunityManagerLayout from "../../components/community-manager/CommunityManagerLayout";
import View from "../../components/community-manager/View";

import email1 from "../../assets/email-1.png";
import email2 from "../../assets/email-2.png";
import email3 from "../../assets/email-3.png";
import email4 from "../../assets/email-4.png";

const CommunityManagerEmailManagement = () => {
  const views = [
    {
      name: "Clients",
      image: email1,
      active: 180,
      link: "/community-manager/email-management/clients",
    },
    {
      name: "Students",
      image: email2,
      active: 180,
      link: "/community-manager/email-management/students",
    },
    {
      name: "Staff",
      image: email3,
      active: 180,
      link: "/community-manager/email-management/staffs",
    },
    {
      name: "Interns",
      image: email4,
      active: 180,
      link: "/community-manager/email-management/interns",
    },
  ];

  return (
    <CommunityManagerLayout>
      <section style={{ marginBottom: "30px" }}>
        <View title="Email Management" views={views} />
      </section>
    </CommunityManagerLayout>
  );
};

export default CommunityManagerEmailManagement;
