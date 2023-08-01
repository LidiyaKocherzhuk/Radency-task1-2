import {NotesDateArchive} from '../api';
import {api} from './note-service';

export const archiveApi = {
  getAll: () => NotesDateArchive,
  
  save: (data) => {
    NotesDateArchive.push(data);
    return data;
  },
  
  unArchive: (id) => {
    const note = archiveApi.delete(id);
    api.save(note);
    return note;
  },
  
  delete: (id) => NotesDateArchive.find((note, index, array) => {
    if (note.id === id) {
      array.splice(index, 1);
      return note;
    }
  }),
};
