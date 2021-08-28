import React from "react";
import {
  SidebarBtn,
  SidebarContainer,
  SidebarFooterWrapper,
  SidebarList,
  SidebarListItem,
  SidebarListItemText,
  SidebarListWrapper,
  SidebarLogo,
  SidebarLogoWrapper,
  SidebarWrapper
} from "./SidebarElements";
import { AiOutlineHome, AiOutlinePlusSquare } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addNote, selectAllNotes } from "../../app/noteSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

const Sidebar = () => {
  const notes = useSelector(selectAllNotes);
  const dispatch = useDispatch();
  const history = useHistory();

  const createNewNote = () => {
    const id = nanoid();
    dispatch(addNote(id));
    history.push(`/${id}`);
  };

  const ListItem = () => (
    <>
      {notes.map(({ title, id }) => (
        <SidebarListItem key={id} to={`/${id}`}>
          <SidebarListItemText>{title}</SidebarListItemText>
        </SidebarListItem>
      ))}
    </>
  );

  return (
    <>
      <SidebarContainer>
        <SidebarWrapper>
          <SidebarLogoWrapper>
            <SidebarLogo to="/">
              <AiOutlineHome />
            </SidebarLogo>
          </SidebarLogoWrapper>

          <SidebarListWrapper>
            <SidebarList>
              <ListItem />
            </SidebarList>
          </SidebarListWrapper>

          <SidebarFooterWrapper>
            <SidebarBtn onClick={createNewNote}>
              <AiOutlinePlusSquare /> New page
            </SidebarBtn>
          </SidebarFooterWrapper>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
