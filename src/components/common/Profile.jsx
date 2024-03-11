import ProfilePhoto from "./ProfilePhoto";
import ProfileEdit from "../ProfileEdit/ProfileEdit";
import ProfileSubscribe from "../ProfileSubscribe/ProfileSubscribe";
import ProfileBadge from "../ProfileBadge/ProfileBadge";
import styled from "styled-components";

const SectionProfile = styled.section`
  width: 296px;
`;

export default function Profile() {
  return (
    <SectionProfile>
      <h2 className="blind">프로필</h2>
      <ProfilePhoto />
      <ProfileEdit />
      <ProfileSubscribe />
      <ProfileBadge />
    </SectionProfile>
  );
}
