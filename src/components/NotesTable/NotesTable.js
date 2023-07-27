import * as React from 'react';
import {useEffect, useState} from 'react';

import './NotesTable.css';
import {data} from '../../services/note-service';
import {NoteForm} from "../NoteForm/NoteForm";

const NotesTable = () => {
  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    setNotes(data);
  }, []);
  
  const createNote = () => {
    const creteForm = document.getElementsByClassName("note-form")[0];
    creteForm.classList.toggle("note-form-show");
    console.log(creteForm);
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
          </tr>
          </thead>
          
          <tbody>
          {notes.map((note, index) =>
              
              <tr key={note.id}>
                
                <td>
                  {index+1}
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
              
              </tr>
          )}
          </tbody>
        
        </table>
        
        <button onClick={createNote}>Create Note</button>
        <NoteForm/>
      
      </div>
  );
};

export {NotesTable};
