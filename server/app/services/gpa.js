const fs = require('fs');

const parseGradesFromFile = async () => {
  const fileContents = await fs.promises.readFile('grades.txt', 'utf8');
  const lines = fileContents.split('\n').filter(line => line.trim() !== '');
  const semesters = lines.reduce((acc, line) => {
    if (line.startsWith('Year')) {
      const [, year, , semester] = line.split(' ');
      acc.push({ year: parseInt(year), semester: parseInt(semester), grades: [] });
    } else {
      const [credits, grade] = line.split(' ').map(parseFloat);
      acc[acc.length - 1].grades.push({ credits, grade });
    }
    return acc;
  }, []);

  const filteredSemesters = semesters.filter(semester => semester.grades.length > 0);
  return { filteredSemesters };
};

module.exports = { parseGradesFromFile };
