import * as React from 'react';
import {BiSolidPencil} from 'react-icons/bi';
import {IoArchiveSharp} from 'react-icons/io5';
import {BsFillTrash3Fill} from 'react-icons/bs';
import {MdUnarchive} from 'react-icons/md';

import '../Note/Note.css';
import {api, archiveApi} from '../../services';


const Note = ({note, index, setNote, setUpdateNote, archive}) => {
  const {id, name, content, category, created, dates} = note;
  
  const updateNote = (note) => {
    const creteForm = document.getElementsByClassName("note-form")[0];
    creteForm.classList.toggle("note-form-show");
    setUpdateNote({...note});
  }
  
  const archiveNote = (id) => {
    setNote({...api.archive(id)});
  }
  
  const deleteNote = (id) => {
    setNote({...api.delete(id)});
  }
  
  const unArchiveNote = (id) => {
    const note = archiveApi.unArchive(id);
    setNote({...note});
  }
  
  
  return (
      <>
        <tr key={id}>
          
          <td>
            {index + 1}
          </td>
          <td>
            {name}
          </td>
          <td>
            {content}
          </td>
          <td>
            {category}
          </td>
          <td>
            {created}
          </td>
          <td>
            {dates}
          </td>
          
          {!archive
              
              ? <>
                <td onClick={() => updateNote(note)}>
                  <BiSolidPencil/>
                </td>
                <td onClick={() => archiveNote(id)}>
                  <IoArchiveSharp/>
                </td>
                <td onClick={() => deleteNote(id)}>
                  <BsFillTrash3Fill/>
                </td>
              </>
              
              : <>
                <td>
                </td>
                <td>
                </td>
                <td onClick={() => unArchiveNote(id)}>
                  <MdUnarchive/>
                </td>
              </>
          }
        
        </tr>
      
      </>
  );
};

export {Note};
