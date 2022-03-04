import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const appLogoFloat = keyframes`
0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0px);
  }
`;


export const Header = styled.header`
  display: flex;
  font-size: calc(10px + 2vmin);
  margin: 1rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  z-index: 1001;
  @media (min-width: 778px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`;

export const AppLogo = styled.img`
  height: 5vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${appLogoFloat} infinite 3s ease-in-out;
  }
  @media (min-width: 778px) {
    display: none;
  }
`;
export const WelcomeText = styled.span`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.16px;
  color: #d6b94d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 778px) {
    display: none;
  }
`;

export const HamburgerIcon = styled.img`
  width: 32px;
  height: 45px;
`;

// .toggle-icon {
//     margin-right: 0.65rem;
//     cursor: pointer;
//     display: flex;
//   }
