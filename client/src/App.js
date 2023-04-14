import React, { useEffect, useState } from 'react';
import './App.css'

const App = () => {
  const [backendData, setBackendData] = useState([]);

  useEffect(() => {
    fetch('/api')
      .then(response => response.json())
      .then(data => setBackendData(data));
  }, []);

  const calculateTotalGPA = () => {
    const totalCredits = backendData.reduce((total, { grades }) =>
      total + grades.reduce((totalCredits, { credits }) =>
        totalCredits + credits, 0), 0);
    const totalGradePoints = backendData.reduce((total, { grades }) =>
      total + grades.reduce((totalGradePoints, { credits, grade }) =>
        totalGradePoints + credits * grade, 0), 0);
    const gpa = totalGradePoints / totalCredits;
    return gpa.toFixed(2);
  }

  return (
    <div className="container">
      <h1>Grades</h1>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Semester</th>
            <th>Credits</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {backendData.map(({ year, semester, grades }) => {
            const totalCredits = grades.reduce((total, { credits }) => total + credits, 0);
            const totalGradePoints = grades.reduce((total, { credits, grade }) => total + (credits * grade || 0), 0);
            const gpa = totalGradePoints / totalCredits;
            return (
              <tr key={`${year}-${semester}`}>
                <td>{year}</td>
                <td>{semester}</td>
                <td>{totalCredits}</td>
                <td>{isNaN(gpa) ? '-' : gpa.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="total-gpa">Total GPA: {calculateTotalGPA()} </p>
    </div>
  );
}

export default App;

