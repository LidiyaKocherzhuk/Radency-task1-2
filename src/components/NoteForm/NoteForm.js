import * as React from 'react';
import {useForm} from "react-hook-form";

import './NoteForm.css';

export const NoteForm = () => {
  const {handleSubmit, register} = useForm();
  
  const getFormData = (data) => {
    console.log(data);
  };
  
  return (
      <div className={"note-form"}>
        <form onSubmit={handleSubmit(getFormData)}>
          <label>Name <input type="text" {...register("name")}/></label>
          <label>Content <input type="text" {...register("content")}/></label>
          <label>Category <input type="text" {...register("category")}/></label>
          <button>Create</button>
        </form>
      </div>
  );
};