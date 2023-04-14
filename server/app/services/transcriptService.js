const Transcript = require("../models/transcriptModel");
const { parseGradesFromFile } = require('./gpa');

class TranscriptService  {

    static async getTranscript() {
        try {
            return parseGradesFromFile();
        } catch (error) {
            throw error;
        }        
    } 
}

module.exports = TranscriptService;