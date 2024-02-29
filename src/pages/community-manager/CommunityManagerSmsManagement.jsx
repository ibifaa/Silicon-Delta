import CommunityManagerLayout from "../../components/community-manager/CommunityManagerLayout";

import email1 from "../../assets/email-1.png";
import email2 from "../../assets/email-2.png";
import email3 from "../../assets/email-3.png";
import email4 from "../../assets/email-4.png";
import View from "../../components/community-manager/View";

const CommunityManagerSmsManagement = () => {
  const views = [
    {
      name: "Clients",
      image: email1,
      active: 180,
      link: "/community-manager/sms-management/clients",
    },
    {
      name: "Students",
      image: email2,
      active: 180,
      link: "/community-manager/sms-management/students",
    },
    {
      name: "Staff",
      image: email3,
      active: 180,
      link: "/community-manager/sms-management/staff",
    },
    {
      name: "Interns",
      image: email4,
      active: 180,
      link: "/community-manager/sms-management/interns",
    },
  ];

  return (
    <CommunityManagerLayout>
      <section style={{ marginBottom: "30px" }}>
        <View title="Sms Management" views={views} />
      </section>
    </CommunityManagerLayout>
  );
};

export default CommunityManagerSmsManagement;
