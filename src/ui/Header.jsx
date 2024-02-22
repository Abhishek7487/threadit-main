import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ProfileCard from "../features/profile/ProfileCard.jsx";

const StyledHeader = styled.div`
  background-color: var(--color-grey-0);
  padding: 0.8rem 3.8rem;
  border-bottom: 5px solid var(--color-grey-100);
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <SearchBar />
      <ProfileCard />
    </StyledHeader>
  );
}

export default Header;
