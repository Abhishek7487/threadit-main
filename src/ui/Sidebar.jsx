import styled from "styled-components";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 5px solid var(--color-grey-100);
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
