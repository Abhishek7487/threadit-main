import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Heading from "./Heading";

import { IoRocketOutline } from "react-icons/io5";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { MdOutlineRecentActors } from "react-icons/md";
import { RiVipCrownLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledFilter = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0.8rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-50);
    background-color: var(--color-primary);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-50);
  }
`;

const StyledFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

function NavFilter() {
  return (
    <StyledFilterContainer>
      <Heading
        as="h2"
        style={{
          textTransform: "uppercase",
          fontSize: "1.6rem",
          fontWeight: "700",
        }}
      >
        ThreadIt Feeds
      </Heading>
      <NavList>
        <li>
          <StyledFilter to="/feed/best">
            <IoRocketOutline />
            <span>Best</span>
          </StyledFilter>
        </li>
        <li>
          <StyledFilter to="/feed/popular">
            <MdOutlineLocalFireDepartment />

            <span>Hot</span>
          </StyledFilter>
        </li>
        <li>
          <StyledFilter to="/feed/new">
            <MdOutlineRecentActors />
            <span>New</span>
          </StyledFilter>
        </li>
        <li>
          <StyledFilter to="/feed/top">
            <RiVipCrownLine />

            <span>Top</span>
          </StyledFilter>
        </li>
      </NavList>
      <Heading
        as="h2"
        style={{
          textTransform: "uppercase",
          fontSize: "1.6rem",
          fontWeight: "700",
        }}
      >
        Others
      </Heading>
      <NavList>
        <li>
          <StyledFilter to="/settings">
            <IoSettingsOutline />
            <span>User Settings</span>
          </StyledFilter>
        </li>
        <li>
          <StyledFilter to="/messages">
            <IoMailOutline />
            <span>Messages</span>
          </StyledFilter>
        </li>
        <li>
          <StyledFilter to="/create-post">
            <FaRegEdit />
            <span>Create Post</span>
          </StyledFilter>
        </li>
      </NavList>
    </StyledFilterContainer>
  );
}

export default NavFilter;
