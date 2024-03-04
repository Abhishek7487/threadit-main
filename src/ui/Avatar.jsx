import { FaRegUser } from "react-icons/fa";
import styled from "styled-components";

const StyledAvatar = styled.div`
  padding: 1rem;
  background-color: var(--color-grey-200);
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Avatar() {
  return (
    <StyledAvatar>
      <FaRegUser />
    </StyledAvatar>
  );
}

export default Avatar;
