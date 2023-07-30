import {NotesData} from '../api';
import {archiveApi} from './archive-service';

export const api = {
  getAll: () => NotesData,
  
  save: (data) => {
    NotesData.push(data);
    return data;
  },
  
  update: (id, data) => NotesData.find((note, index, array) => {
    if (id === note.id && index) {
      array.splice(index, 1, data);
      return note;
    }
  }),
  
  archive: (id) => {
    const note = api.delete(id);
    
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
