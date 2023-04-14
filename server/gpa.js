const fs = require('fs');

function parseGradesFromFile() {
  const fileContents = fs.readFileSync('grades.txt', 'utf8');

  const lines = fileContents.split('\n').filter(line => line.trim() !== '');

  const semesters = [];
  let currentSemester = {};

  for (const line of lines) {
    if (line.startsWith('Year')) {
      if (Object.keys(currentSemester).length > 0) {
        semesters.push(currentSemester);
        currentSemester = {};
      }
      currentSemester.year = parseInt(line.split(' ')[1]);
      currentSemester.semester = parseInt(line.split(' ')[3]);
      currentSemester.grades = [];
    } else {
      const [credits, grade] = line.split(' ').map(parseFloat);
      currentSemester.grades.push({ credits, grade });
    }
  }

  if (Object.keys(currentSemester).length > 0) {
    semesters.push(currentSemester);
  }

  const filteredSemesters = semesters.filter(semester => semester.grades.length > 0);

  return {filteredSemesters};
};

module.exports = {parseGradesFromFile}



