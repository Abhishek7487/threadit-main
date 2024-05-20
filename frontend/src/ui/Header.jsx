import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HeaderActions from "./HeaderActions.jsx";

const StyledHeader = styled.div`
  background-color: var(--color-grey-0);
  padding: 0.8rem 0.8rem;
  border-bottom: 5px solid var(--color-grey-100);
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 32rem 1fr 42rem;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <SearchBar />
      <HeaderActions />
    </StyledHeader>
  );
}

export default Header;
