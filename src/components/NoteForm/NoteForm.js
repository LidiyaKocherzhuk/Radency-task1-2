import * as React from 'react';
import {useForm} from "react-hook-form";

import './NoteForm.css';
import {api} from "../../services/note-service";

export const NoteForm = ({id, addNote}) => {
  const {handleSubmit, register, reset} = useForm();
  let date = new Date().toDateString();
  console.log(date)
  
  const getFormData = (data) => {
    const note = api.save({...data, id, created: date, dates: date});
    addNote(note);
    reset();
  
    const creteForm = document.getElementsByClassName("note-form")[0];
    creteForm.classList.toggle("note-form-show");
  };
  
  return (
      <div className={"note-form"}>
        <h2>New Note</h2>
        <form onSubmit={handleSubmit(getFormData)}>
          <label>Name <input type="text" {...register("name")}/></label>
          <label>Content <input type="text" {...register("content")}/></label>
          <label>Category <input type="text" {...register("category")}/></label>
          <button>Create</button>
        </form>
      </div>
  );
};