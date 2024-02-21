import styled from "styled-components";

const StyledExtras = styled.aside`
  background-color: var(--color-grey-50);
  padding: 3.2rem 2.4rem;
  border-left: 5px solid var(--color-grey-100);
`;

function Extras() {
  return <StyledExtras>EXTRAS</StyledExtras>;
}

export default Extras;
