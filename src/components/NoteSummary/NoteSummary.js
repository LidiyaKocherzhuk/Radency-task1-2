import * as React from 'react';
import {useEffect, useState} from 'react';

import './NoteSummary.css';
import {api, archiveApi} from "../../services";
import {categories} from "../../api";

const NoteSummary = ({note, setNote}) => {
  const [notes, setNotes] = useState({});
  const [archiveNotes, setArchiveNotes] = useState({});
  
  useEffect(() => {
    setNotes(sumData(api.getAll()));
    setArchiveNotes(sumData(archiveApi.getAll()));
  }, [note]);
  
  const sumData = (noteData) => {
    return noteData.reduce((prev, current) => {
      if (prev[current.category]) {
        prev[current.category]++;
      } else {
        prev[current.category] = 1;
      }
      return prev;
    }, {});
  }
  
  console.log(notes, archiveNotes)
  
  return (
      <div className={"notesSummary"}>
   
        <table className={"notesSummary-table"}>
          
          <thead>
          <tr className={"notesSummary-table-header"}>
            <th>
              name
            </th>
            <th>
              active
            </th>
            <th>
              archived
            </th>
            <th></th>
          </tr>
          </thead>
          
          <tbody>
          {
            categories.map((item, index) => <tr key={index}>
              <td>{item.category}</td>
              <td>{notes[item.category]}</td>
              <td>{archiveNotes[item.category]}</td>
              <td></td>
            </tr>)
          }
          </tbody>
        
        </table>
    
      </div>
  );
};

export {NoteSummary};
