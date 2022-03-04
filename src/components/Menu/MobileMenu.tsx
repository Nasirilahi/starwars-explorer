/** @jsxImportSource @emotion/react */
import React from "react";
import { Link } from "react-router-dom";

import { setMobileMenuOpen } from "../../app/redux/appSlice";
import selectors from "../../app/redux/appSelectors";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import iconClose from "../../images/icon-close.svg";
import LinkButton from "../button/LinkButton";
import {
  MobileLeftContainer,
  CloseContainer,
  CloseIcon,
  MenuContainer,
  menuListItem,
  MenuListItemLabel,
  LogoImage,
} from "./styles";
import "./menu.css";
import Logo from "../../images/star-wars-logo.png";

interface MenuItem {
  id: number;
  name: string;
  displayName: string;
  icon: string;
  IconComponent: any;
}

interface MobileMenuProps {
  menuItems: MenuItem[];
  isCurrentMenu: (arg: string) => boolean;
}

const MobileMenu = ({
  menuItems,
  isCurrentMenu,
}: MobileMenuProps): JSX.Element => {
  const isMobileMenuOpen = useAppSelector(selectors.isMobileMenuOpen);
  const dispatch = useAppDispatch();
  return (
    <>
      <MobileLeftContainer full={isMobileMenuOpen}>
        <CloseContainer>
          <LinkButton
            dataTestid="mobile-menu"
            className={"toggle-icon"}
            onClick={() => dispatch(setMobileMenuOpen(!isMobileMenuOpen))}
          >
            <CloseIcon src={iconClose} alt="menu" />
          </LinkButton>
          <LogoImage src={Logo} alt="logo" />
        </CloseContainer>
        <MenuContainer>
          <LinkButton
            className="menu-items"
            onClick={() => dispatch(setMobileMenuOpen(false))}
            componentContianer="div"
          >
            <>
              {menuItems.map(({id, name, IconComponent, displayName}) => (
                <Link
                  key={id}
                  to={`/${name}`}
                  css={menuListItem(isCurrentMenu(name))}
                >
                  {/* <img src={icon} alt={name} width={18} height={15} /> */}
                  <IconComponent style={{color: 'black'}} />
                  <MenuListItemLabel>{displayName}</MenuListItemLabel>
                </Link>
              ))}
            </>
          </LinkButton>
        </MenuContainer>
      </MobileLeftContainer>
    </>
  );
};

export default MobileMenu;
