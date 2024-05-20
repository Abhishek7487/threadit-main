import styled from "styled-components";

const StyledSearchBar = styled.input`
  height: 75%;
  background-color: var(--color-grey-100);
  border: none;
  border-radius: 1rem;
  width: 100%;
  padding: 0.2rem 2.4rem;
  border-radius: 2rem;

  &:focus {
    border: 1px solid var(--color-secondary-50);
  }
`;

function SearchBar() {
  return <StyledSearchBar placeholder="Search" />;
}

export default SearchBar;
