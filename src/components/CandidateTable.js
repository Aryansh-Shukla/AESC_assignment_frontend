import React from 'react';
import './CandidateTable.css';

function CandidateTable({ candidates }) {
  return (
    <table className="candidate-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Skills</th>
          <th>Years of Experience</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((candidate) => (
          <tr key={candidate.id}>
            <td>{candidate.name}</td>
            <td>{candidate.skills}</td>
            <td>{candidate.experience}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CandidateTable;
