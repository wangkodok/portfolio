import styled from "styled-components";

export default function ButtonEdit() {
  return <Button>Edit profile</Button>;
}

const Button = styled.button`
  border: 1px solid #d6d8db;
  background-color: #f6f8fa;
  border-radius: 6px;
  width: 100%;
  padding: 5px 16px;
  font-weight: 500;
`;
