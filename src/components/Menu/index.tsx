/** @jsxImportSource @emotion/react */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "@mui/material/Icon";
import PeopleIcon from "@mui/icons-material/People";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import {
  MainContainer,
  LeftContainerButtons,
  LeftContainer,
  menuItem,
  LogoIcon,
} from "./styles";
import { PEOPLE_MENU, MOVIES_MENU, PLANET_MENU } from "../../constants";
import icon from "../../images/icon.png";
import MobileMenu from "./MobileMenu";

const APP_MENU_ITEMS = [
  {
    id: 100,
    name: PEOPLE_MENU,
    displayName: "People",
    IconComponent: PeopleIcon,
    icon: "https://storage.googleapis.com/chefhero-storage-release/static/fe-supplier/images/icon-orders-color.svg",
    alt: "people icon",
  },
  {
    id: 102,
    name: MOVIES_MENU,
    displayName: "Movies",
    IconComponent: MovieFilterIcon,
    icon: "https://storage.googleapis.com/chefhero-storage-release/static/fe-supplier/images/inbox-icon.svg",
    alt: "movies icon",
  },
  {
    id: 103,
    name: PLANET_MENU,
    displayName: "Planet",
    IconComponent: PublicRoundedIcon,
    icon: "https://storage.googleapis.com/chefhero-storage-release/static/fe-supplier/images/settings-icon.svg",
    alt: "planet icon",
  },
];

const Menu = (): JSX.Element => {
  // const isMenuOpen = useSelector(selectors.isMenuOpen);
  // const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const isCurrentMenu = (name: string): boolean => {
    if (name === "" && pathname === "/") {
      return true;
    } else {
      return pathname.includes(name) && name !== "";
    }
  };
  return (
    <MainContainer>
      <LeftContainerButtons>
        <LeftContainer>
          <Icon fontSize="small">add_circle</Icon>
          <Link to={`/`} css={menuItem(false)}>
            <LogoIcon src={icon} alt="icon" />
          </Link>

          {APP_MENU_ITEMS.map(({ id, name, IconComponent }) => (
            <Link key={id} to={`/${name}`} css={menuItem(isCurrentMenu(name))}>
              {" "}
              <IconComponent style={{ color: "black" }} />
            </Link>
          ))}
        </LeftContainer>
      </LeftContainerButtons>
      <MobileMenu menuItems={APP_MENU_ITEMS} isCurrentMenu={isCurrentMenu} />
    </MainContainer>
  );
};

export default Menu;
