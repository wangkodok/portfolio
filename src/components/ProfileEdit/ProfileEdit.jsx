import ButtonEdit from "../common/ButtonEdit";
import styled from "styled-components";

const Title = styled.p`
  font-size: 20px;
  color: #656d76;
  padding: 16px 0;
  font-weight: 300;
`;

const Desc = styled.p`
  color: #1f2328;
  margin: 0 0 16px 0;
`;

export default function ProfileEdit() {
  return (
    <div>
      <Title>front-end & publisher</Title>
      <Desc>포트폴리오</Desc>
      <ButtonEdit>Edit profile</ButtonEdit>
    </div>
  );
}
