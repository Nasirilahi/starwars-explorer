import humburgerIcon from "../../images/icon-hamburger-menu.svg";
import {
  Header,
  LeftContainer,
  RightContainer,
  AppLogo,
  WelcomeText,
  HamburgerIcon,
} from "./styles";
import robotLogo from "../../images/robot.png";
import LinkButton from "../button/LinkButton";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setMobileMenuOpen } from "../../app/redux/appSlice";
import appSelectors from "../../app/redux/appSelectors";

const HeaderView = () => {
  const dispatch = useAppDispatch();
  const isMobileMenuOpen = useAppSelector(appSelectors.isMobileMenuOpen);

  return (
    <Header>
      <LeftContainer>
        <LinkButton
          onClick={() => dispatch(setMobileMenuOpen(!isMobileMenuOpen))}
        >
          <HamburgerIcon src={humburgerIcon} alt="menu" />
        </LinkButton>
      </LeftContainer>
      <RightContainer>
        <WelcomeText>Welcome to Stars wars explorer</WelcomeText>
        <AppLogo src={robotLogo} alt="logo" />
      </RightContainer>
    </Header>
  );
};

export default HeaderView;
