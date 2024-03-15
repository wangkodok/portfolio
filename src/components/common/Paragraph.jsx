import styled from "styled-components";

// p 태그 컴포넌트
export default function Paragraph({ children, ...props }) {
  return <P {...props}>{children}</P>;
}

const P = styled.p`
  margin: ${(props) => props.$margin};
`;

// 스타일 컴포넌트 값 전달하는 코드
// ${(props) => {
//   return props.$color;
// }};
