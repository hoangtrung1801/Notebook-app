import styled from "styled-components";

export const NoteContainer = styled.div`
  padding: 2rem 2rem;

  display: flex;
  flex-direction: column;
`;

export const NoteHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-items: center;

  margin-bottom: 2rem;
`;

export const NoteFont = styled.div`
  font-weight: bold;
  color: white;
  background: #212529;
  padding: 5px 10px;
  border-radius: 20px;

  cursor: pointer;
`;

export const NoteJustify = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  * {
    margin-left: 7px;
    cursor: pointer;

    &:active {
      background: #ced4da;
    }
  }
`;

export const NoteTool = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;

  * {
    margin-left: 7px;
    cursor: pointer;
  }
`;

export const NoteSave = styled.button`
  display: flex;
  align-items: center;

  background: transparent;
  outline: none;
  border: none;

  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background: #212529;
    padding: 5px 10px;
    border-radius: 20px;
    color: white;
  }
`;

export const NoteContentWrapper = styled.div`
  height: 100%;
  flex-grow: 1;
`;

export const NoteTitle = styled.h2`
  margin-bottom: 1rem;
  letter-spacing: 1px;
`;

export const NoteContent = styled.div`
  font-size: 20px;
  font-weight: 300;
`;
