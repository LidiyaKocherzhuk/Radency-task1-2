import {NotesData} from '../api/notes-data.js';
import {archiveApi} from "./archive-service";

export const api = {
  getAll: () => NotesData,
  
  getById: (id) => NotesData.find(note => note.id === id),
  
  save: (data) => {
    NotesData.push(data);
    return data;
  },
  
  update: (id, data) => NotesData.map((note, index, array) => {
    if (id === note.id && index) {
      array.splice(index, 1, data);
    }
    return array;
  }),
  
  archive: (id) => {
    const note = NotesData.find((note, index, array) => {
      if (note.id === id) {
        array.splice(index, 1);
        return note;
      }
    })
  
    archiveApi.save(note);
    return note;
  },
  
  delete: (id) => NotesData.find((note, index, array) => {
      if (note.id === id) {
        array.splice(index, 1);
        return note;
      }
    }),
};
