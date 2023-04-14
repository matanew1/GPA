const express = require('express')
const {parseGradesFromFile} = require('./gpa')
const app = express()

app.get('/api', (req, res) => {
    const {filteredSemesters} = parseGradesFromFile()
    res.json(filteredSemesters);
});


app.listen(5000, () => {
    console.log("http://localhost:5000/api")
})