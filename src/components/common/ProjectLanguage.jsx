import styled from "styled-components";

export default function ProjectLanguage({ color, innerText }) {
  return (
    <>
      <DevLanguageColor color={color} />
      <DevLanguage>{innerText}</DevLanguage>
    </>
  );
}

const common = {
  margin: "0 6px 0 0",
};

const DevLanguageColor = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  margin: ${common.margin};
  background-color: ${function ({ color }) {
    return color;
  }};
  border-radius: 6px;
`;

const DevLanguage = styled.span`
  margin: ${common.margin};
`;
