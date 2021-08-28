import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #212529;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const SidebarLogoWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 80px;
  padding-left: 20px;

  color: white;
`;

export const SidebarLogo = styled(Link)`
  font-size: 2rem;
  cursor: pointer;
  color: #f8f9fa;
`;

export const SidebarListWrapper = styled.div`
  flex-grow: 1;
`;

export const SidebarList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarListItem = styled(Link)`
  width: 100%;
  height: 70px;
  padding: 0 20px;

  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #343a40;
  }
`;

export const SidebarListItemText = styled.p`
  color: #f8f9fa;
  font-size: 2rem;
  font-weight: bold;

  padding-left: 20px;

  &.active {
    border-left: 5px solid #f8f9fa;
  }
`;

export const SidebarFooterWrapper = styled.div`
  min-height: 80px;
  width: 100%;
  padding: 10px 20px;

  display: flex;
  align-items: center;
`;

export const SidebarBtn = styled.button`
  background: inherit;
  outline: none;
  border: none;
  color: #f8f9fa;
  font-size: 1.2rem;
  cursor: pointer;

  display: flex;
  align-items: center;

  *:nth-child(1) {
    margin-right: 10px;
  }
`;
