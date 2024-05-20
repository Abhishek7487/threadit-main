import styled from "styled-components";
import ProfileCard from "../features/profile/ProfileCard";

import { IoAdd } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const StyledPostCreator = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.8rem 1.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--color-grey-300);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledHeaderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 3.8rem;
`;

function HeaderActions() {
  return (
    <StyledHeaderActions>
      <StyledPostCreator to="/create-post">
        <IoAdd />
        <p>Create post</p>
      </StyledPostCreator>
      <ProfileCard />
    </StyledHeaderActions>
  );
}

export default HeaderActions;
