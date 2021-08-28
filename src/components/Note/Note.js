import React from "react";
import {
  FiAlignJustify,
  FiAlignLeft,
  FiAlignRight,
  FiLink
} from "react-icons/fi";
import { AiOutlinePicture } from "react-icons/ai";
import { VscNewFile } from "react-icons/vsc";
import {
  NoteContainer,
  NoteContent,
  NoteContentWrapper,
  NoteFont,
  NoteHeader,
  NoteJustify,
  NoteSave,
  NoteTitle,
  NoteTool
} from "./NoteElements";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNote } from "../../app/noteSlice";

const Note = () => {
  const { id } = useParams();
  const { title, content } = useSelector((state) => selectNote(state, id));

  return (
    <>
      <NoteContainer>
        <NoteHeader>
          <NoteFont>16px</NoteFont>
          <NoteJustify>
            <FiAlignLeft />
            <FiAlignJustify />
            <FiAlignRight />
          </NoteJustify>
          <NoteTool>
            <FiLink />
            <AiOutlinePicture />
            <VscNewFile />
          </NoteTool>
          <NoteSave>Save</NoteSave>
        </NoteHeader>
        <NoteContentWrapper>
          <NoteTitle>{title}</NoteTitle>
          <NoteContent>{content}</NoteContent>
        </NoteContentWrapper>
      </NoteContainer>
    </>
  );
};

export default Note;
