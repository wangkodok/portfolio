import styled from "styled-components";
import OverviewSkill from "../OverviewSkill/OverviewSkill";
import OverviewWork from "../OverviewWork/OverviewWork";

const SectionOverviewContent = styled.section`
  width: 896px;
`;

const Md = styled.div`
  padding: 16px;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  box-sizing: border-box;
`;

const Desc = styled.p`
  margin: 0 0 16px 0;
`;

export default function OverviewInfo() {
  return (
    <SectionOverviewContent>
      <h2 className="blind">개요</h2>
      <Md>
        <Desc>portfolio/README.md</Desc>
        <p>안녕하세요.</p>
        <OverviewSkill />
      </Md>
      <OverviewWork />
    </SectionOverviewContent>
  );
}
