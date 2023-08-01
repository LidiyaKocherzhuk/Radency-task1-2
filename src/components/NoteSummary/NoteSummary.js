import * as React from 'react';
import {useEffect, useState} from 'react';

import './NoteSummary.css';
import {api, archiveApi} from '../../services';
import {categories} from '../../api';

const NoteSummary = ({note}) => {
  const [notes, setNotes] = useState({});
  const [archiveNotes, setArchiveNotes] = useState({});
  const [error, setError] = useState("");
  
  useEffect(() => {
    try {
      setNotes(sumData(api.getAll()));
      setArchiveNotes(sumData(archiveApi.getAll()));
    } catch (e) {
      setError(e.message);
    }
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
  
  if (error) {
    return (
        <div className={"error"}>
          <h3>{error}</h3>
        </div>
    );
  }
  
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
          </tr>
          </thead>
          
          <tbody>
          {
            categories.map((item, index) => <tr key={index}>
              <td>{item}</td>
              <td>{notes[item]}</td>
              <td>{archiveNotes[item]}</td>
            </tr>)
          }
          </tbody>
        
        </table>
      
      </div>
  );
};

export {NoteSummary};
