import styled from "styled-components";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1216px;
  margin: 0 auto;
  padding: 32px;
`;

export default function Inner({ children }) {
  return <Content>{children}</Content>;
}
