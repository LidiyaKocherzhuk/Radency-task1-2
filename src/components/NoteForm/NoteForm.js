import * as React from 'react';
import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {GrClose} from 'react-icons/gr';
import {v4 as uuid} from 'uuid';

import './NoteForm.css';
import {api} from '../../services';
import {categories} from "../../api";

export const NoteForm = ({setNote, updateNote, setUpdateNote}) => {
  const {handleSubmit, register, reset, setValue} = useForm();
  
  const {name, content, category, dates} = updateNote;
  let date = new Date().toDateString();
  let id = uuid();
  
  useEffect(() => {
    setValue('name', name)
    setValue('content', content)
    setValue('category', category)
    setValue('dates', dates)
  }, [updateNote]);
  
  const close = () => {
    const creteForm = document.getElementsByClassName("note-form")[0];
    creteForm.classList.toggle("note-form-show");
  }
  
  const getFormData = (data) => {
    let note = {};
    
    if (!updateNote.id) {
      note = api.save({...data, id, created: date, dates: date});
    } else {
      let dates = updateNote.dates === data.dates ? updateNote.dates : `${updateNote.dates},${data.dates}`;
      note = api.update(updateNote.id, {...updateNote, ...data, dates});
      setUpdateNote({})
    }
    
    setNote({...note});
    reset();
    close();
  };
  
  return (
      <div className={"note-form"}>
        <h2>{updateNote.id ? "Update Note" : "New Note"}</h2>
        <hr/>
        
        <form onSubmit={handleSubmit(getFormData)}>
          <label>Name <input type="text" {...register("name")}/></label>
          <label>Content <input type="text" {...register("content")}/></label>
          <label>Category <select{...register("category")}>
            {categories.map(item => <option value={item.category}>{item.category}</option>)}
          </select></label>
          
          {updateNote.id &&
          <label>Dates
            <input type="text" {...register("dates")}/>
          </label>
          }
          
          <button>{updateNote.id ? "Update" : "Create"}</button>
          <GrClose className={"close-btn"} onClick={close}/>
        </form>
      </div>
  );
};