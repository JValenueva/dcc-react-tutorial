import React, { useState } from 'react';
import DisplayEntries from './C omponents/DisplayEntries/DisplayEntries';
import AddEntryForm from './C omponents/AddEntry/AddEntryForm';

function App() {

  const [entries, setEntreies] = useState([{weight: 175, date: '11-23-2021'}, {weight: 176, date: '11-24-2021'}])

  function addNewEntry(entry){

    let tempEntries = [...entries, entry];

    setEntreies(tempEntries);
  }


  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEntry} />
    </div>
  );
}

export default App;
