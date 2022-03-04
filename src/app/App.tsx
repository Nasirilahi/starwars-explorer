import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import HeaderView from "../components/Header";
import { MainContainer, BodyContainer } from "./styles";

function App() {
  return (
    <MainContainer>
      <HeaderView />
      <>
        <Menu />
        <BodyContainer>
          <Outlet />
        </BodyContainer>
      </>
    </MainContainer>
  );
}
export default App;
