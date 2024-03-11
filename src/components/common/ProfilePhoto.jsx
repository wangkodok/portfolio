import img from "../../image/github.png";
import styled from "styled-components";

const ImgHolder = styled.div`
  border: 1px solid #d0d7de;
  border-radius: 50%;

  img {
    width: 100%;
  }
`;

export default function ProfilePhoto() {
  return (
    <ImgHolder>
      {/* <img src="https://via.placeholder.com/296" alt="샘플이미지" /> */}
      <img src={img} alt="깃허브" />
    </ImgHolder>
  );
}
