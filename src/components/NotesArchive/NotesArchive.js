import * as React from 'react';
import {useEffect, useState} from 'react';

import './NotesArchive.css';
import {archiveApi} from '../../services';
import {Note} from '../Note/Note';

const NotesArchive = ({note, setNote}) => {
  const [archiveNotes, setArchiveNotes] = useState([]);
  
  useEffect(() => {
    setArchiveNotes(archiveApi.getAll());
  }, [note]);
  
  return (
      <div className={"notesArchive"}>
        {
          archiveNotes.length
              ? <table className={"notesArchive-table"}>
                
                <thead>
                <tr className={"notesArchive-table-header"}>
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
                  </th>
                  <th>
                  </th>
                </tr>
                </thead>
                
                <tbody>
                {
                  archiveNotes.map((note, index) => <Note
                      key={note.id}
                      note={note}
                      index={index}
                      setNote={setNote}
                      archive={true}
                  />)
                }
                </tbody>
              
              </table>
              
              : <h2>Archive is empty!</h2>
        }
      </div>
  );
};

export {NotesArchive};
