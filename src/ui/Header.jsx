import styled from "styled-components";

const StyledHeader = styled.div`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 5px solid var(--color-grey-100);
  grid-column: 1 / -1;
`;

function Header() {
  return <StyledHeader>HEADER</StyledHeader>;
}

export default Header;
