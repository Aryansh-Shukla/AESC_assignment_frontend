import React, { useState, useEffect } from 'react';
import CandidateTable from './components/CandidateTable';
import './App.css';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetch('http://localhost:5000/api/candidates')
      .then((response) => response.json())
      .then((data) => setCandidates(data));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSort = () => {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(order);
    setCandidates((prevCandidates) =>
      [...prevCandidates].sort((a, b) => {
        return order === 'asc' ? a.experience - b.experience : b.experience - a.experience;
      })
    );
  };

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(search.toLowerCase()) ||
    candidate.skills.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Candidate List Viewer</h1>
      <input
        type="text"
        placeholder="Search by Name or Skills"
        value={search}
        onChange={handleSearch}
      />
      <button onClick={handleSort}>Sort by Experience ({sortOrder})</button>
      <CandidateTable candidates={filteredCandidates} />
    </div>
  );
}

export default App;
