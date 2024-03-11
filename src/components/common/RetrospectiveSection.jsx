import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  margin: 8px 0 0 0;
`;

const StyledListItem = styled.li`
  margin: 0 8px 0 0;
`;

const StyledListItemLink = styled(Link)`
  padding: 4px;
  border: 1px solid #d0d7de;
  border-radius: 6px;
  font-size: 12px;

  &:hover {
    background-color: #d0d7de;
    color: #000;
  }
`;

export default function RetrospectiveSection({ data }) {
  return (
    <>
      {data.reflectionContent !== undefined ? (
        <StyledList>
          {data.reflectionContent.map((item, index) => {
            console.log(item);
            return (
              <StyledListItem key={index}>
                <StyledListItemLink to={item.link} target="_blank">
                  {item.title}
                </StyledListItemLink>
              </StyledListItem>
            );
          })}
        </StyledList>
      ) : null}
    </>
  );
}
