import * as React from 'react';
import {useEffect, useState} from 'react';
import {IoArchiveSharp} from 'react-icons/io5';
import {BsFillTrash3Fill} from 'react-icons/bs';

import './Notes.css';
import {api} from '../../services';
import {NoteForm} from '../NoteForm/NoteForm';
import {NotesArchive} from '../NotesArchive/NotesArchive';
import {Note} from '../Note/Note';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({});
  const [updateNote, setUpdateNote] = useState({});
  
  useEffect(() => {
    setNotes(api.getAll());
  }, [note]);
  
  const createNote = () => {
    const creteForm = document.getElementsByClassName("note-form")[0];
    creteForm.classList.toggle("note-form-show");
  }
  
  const showArchivedNotes = () => {
    const archive = document.getElementsByClassName("notesArchive")[0];
    console.log(archive);
    archive.classList.toggle("notesArchive-show");
  };
  
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
          
          {
            notes.map((note, index) => <Note
                key={note.id}
                note={note}
                index={index}
                setNote={setNote}
                setUpdateNote={setUpdateNote}
            />)
          }
          
          </tbody>
        
        </table>
        
        <div className={"btns"}>
          <button onClick={createNote}>Create Note</button>
          <button onClick={showArchivedNotes}>Archive</button>
        </div>
        
        <NotesArchive note={note} setNote={setNote}/>
        <NoteForm setNote={setNote} updateNote={updateNote} setUpdateNote={setUpdateNote}/>
        
      </div>
  );
};

export {Notes};
