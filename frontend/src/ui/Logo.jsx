import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: start;
`;

const Img = styled.img`
  height: 4.8rem;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/public/logo.png" alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
