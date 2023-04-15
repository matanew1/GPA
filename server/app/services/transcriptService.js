const Transcript = require("../models/transcriptModel");
const { parseGradesFromFile } = require('./gpa');

class TranscriptService  {

    static async getTranscript() {
        try {
            const { filteredSemesters } = await parseGradesFromFile();
            return { filteredSemesters };
        } catch (error) {
            throw error;
        }        
    } 
}

module.exports = TranscriptService;