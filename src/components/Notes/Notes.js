import * as React from 'react';
import {useEffect, useState} from 'react';
import {BiSolidPencil} from "react-icons/bi";
import {IoArchiveSharp} from "react-icons/io5";
import {BsFillTrash3Fill} from "react-icons/bs";

import './Notes.css';
import {api} from '../../services/note-service';
import {NoteForm} from "../NoteForm/NoteForm";
import {NotesArchive} from "../NotesArchive/NotesArchive";
import {archiveApi} from "../../services/archive-service";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [note, setNote] = useState({});
  console.log(notes);
  
  useEffect(() => {
    setNotes(api.getAll());
    setArchiveNotes(archiveApi.getAll());
  }, [note.id]);
  
  const createNote = () => {
    const creteForm = document.getElementsByClassName("note-form")[0];
    creteForm.classList.toggle("note-form-show");
  }
  
  const updateNote = () => {
  }
  
  const archiveNote = (id) => {
    setNote(api.archive(id));
  }
  
  const deleteNote = (id) => {
    setNote(api.delete(id));
  }
  
  return (
      <div className={"notes"}>
        <table className={"notes-table"}>
          
          <thead>
          <tr className={"notes-table-header"}>
            <th>
            </th>
            <th>
              name
            </th>
            <th>
              content
            </th>
            <th>
              category
            </th>
            <th>
              created
            </th>
            <th>
              dates
            </th>
            <th>
            </th>
            <th>
              <IoArchiveSharp/>
            </th>
            <th>
              <BsFillTrash3Fill/>
            </th>
          </tr>
          </thead>
          
          <tbody>
          {notes.map((note, index) =>
              
              <tr key={note.id}>
                
                <td>
                  {index + 1}
                </td>
                <td>
                  {note.name}
                </td>
                <td>
                  {note.content}
                </td>
                <td>
                  {note.category}
                </td>
                <td>
                  {note.created}
                </td>
                <td>
                  {note.dates}
                </td>
                <td onClick={updateNote}>
                  <BiSolidPencil/>
                </td>
                <td onClick={() => archiveNote(note.id)}>
                  <IoArchiveSharp/>
                </td>
                <td onClick={() => deleteNote(note.id)}>
                  <BsFillTrash3Fill/>
                </td>
              
              </tr>
          )}
          </tbody>
        
        </table>
  
        <div className={"create-btn"}>
          <button onClick={createNote}>Create Note</button>
        </div>
        
        <NoteForm id={notes.length} addNote={setNote}/>
        
        {/*{archiveNotes.length*/}
        {/*    ? <NotesArchive note={note}/>*/}
        {/*    : undefined*/}
        {/*}*/}
      
      </div>
  );
};

export {Notes};
