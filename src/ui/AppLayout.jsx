import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import Extras from "./Extras";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr 36rem;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
      <Extras />
    </StyledAppLayout>
  );
}

export default AppLayout;
