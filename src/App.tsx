import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DATE_FIELD, COLUMN_FIELDS} from './dataimport';

export default (props: {data: any[]}) => {
  let cols = [DATE_FIELD, ...COLUMN_FIELDS];
  return (<div>
    <table className="table table-striped">
      <thead>
        <tr>
          {cols.map((col) => <th>{col}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.data.map((row) => (
          <tr>
            {cols.map((col) => (<td>{(row[col] || "")}</td>))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>)
}