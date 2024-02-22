import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

const StyledProfileCard = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  p {
    padding-right: 2.8rem;
    font-weight: 500;
    color: var(--color-grey-500);
  }
`;

function ProfileCard() {
  return (
    <StyledProfileCard>
      <img src="/public/logo-small.png" alt="avatar" />
      <p>Username</p>
      <IoIosArrowDown />
    </StyledProfileCard>
  );
}

export default ProfileCard;
