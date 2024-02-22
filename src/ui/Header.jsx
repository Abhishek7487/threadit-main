import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.div`
  background-color: var(--color-grey-0);
  padding: 0.8rem 2.8rem;
  border-bottom: 5px solid var(--color-grey-100);
  grid-column: 1 / -1;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

export default Header;
