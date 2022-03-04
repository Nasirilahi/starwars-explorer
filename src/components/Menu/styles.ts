/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

const menuCollapse = keyframes`
0% {
  left: 0;
}
100% {
  left: -350px;
}
`;

const menuExpand = keyframes`
  0% {
      left: -350px;
  }
  100% {
    left: 0;
  }
`;
export const MainContainer = styled.div`
  display: flex;
  margin: 1.1rem 0 0 0;
`;

export const LeftContainerButtons = styled.div`
  position: fixed;
`;

export const LeftContainer = styled.div`
  transition: min-width 0.5s, max-width 0.5s;
  z-index: 1001;
  position: fixed;
  top: 0;
  min-width: 62px;
  max-width: 62px;
  height: 100%;
  background-color: white;
  @media (max-width: 778px) {
    display: none;
  }
`;

export const menuItem = (isSelected: boolean) => css`
  display: flex;
  z-index: 1001;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.75rem;
  color: black;
  opacity: 8;
  border-top-right-radius: ${isSelected ? "100px" : "0"};
  border-bottom-right-radius: ${isSelected ? "100px" : "0"};
  background-color: ${isSelected ? "#edebe7" : "transparent"};
  opacity: unset;
`;

export const LogoIcon = styled.img`
  width: 24px;
  height: 24px;
`;

type MenuProps = {
  full: boolean;
};

export const MobileLeftContainer = styled.div<MenuProps>`
  position: fixed;
  top: 0;
  border-radius: 0 3px 3px 0;
  background-color: #fff;
  height: 100%;
  animation-duration: 0.7s;
  z-index: 1008;
  box-shadow: -5px 0 10px 0 rgba(37, 37, 37, 0.2);
  left: ${({ full }) => (full ? "0" : "-350px")};
  animation-name: ${menuCollapse};
  @media (min-width: 778px) {
    display: none;
  }
`;

export const CloseContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
`;

export const CloseIcon = styled.img`
  margin-top: 15px;
  height: 32px;
  width: 45px;
`;

export const MenuContainer = styled.div`
  margin: 0.65rem 5.7rem 0.65rem 0;
  width: 200px;
`;

export const toggleIcon = css`
  margin-right: 0.65rem;
  cursor: pointer;
  display: flex;
`;

export const menuListItem = (isSelected: boolean) => {
  return css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1001;
    cursor: pointer;
    padding: 0.65rem 0 0.65rem 1.5rem;
    margin: 0.55rem 0;
    opacity: 8;
    color: #252525;
    text-decoration: none;
    &:hover {
      text-shadow: 0px 0px #252525;
    }
    border-top-right-radius: ${isSelected ? "100px" : "0"};
    border-bottom-right-radius: ${isSelected ? "100px" : "0"};
    background-color: ${isSelected ? "#edebe7" : "transparent"};
    opacity: unset;
  `;
};

export const MenuListItemLabel = styled.span`
  margin-left: 0.72rem;
  letter-spacing: -0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const LogoImage = styled.img`
  object-fit: contain;
  width: 110px;
  height: 30px;
`;
