import styled from "@emotion/styled";
import spaceBackground from '../images/space.jpeg';

export const MainContainer = styled.div`
  color: white;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(${spaceBackground});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  background-size: 100% 100%;
`;
export const BodyContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  margin: 0 20px 0 80px;
  @media (max-width: 778px) {
    margin: 0 20px;
  }
`;

