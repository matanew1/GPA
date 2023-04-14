const mongoose = require('../../config/db');

const { Schema } = mongoose;

const gradeSchema = new Schema({
  credits: { type: Number, required: true },
  grade: { type: Number, required: true },
});

const semesterSchema = new Schema({
  year: { type: Number, required: true },
  semester: { type: Number, required: true },
  grades: { type: [gradeSchema], required: true },
});

const transcriptSchema = new Schema({
  semesters: { type: [semesterSchema], required: true },
});

const Transcript = mongoose.model('Transcript', transcriptSchema);

module.exports = Transcript;
