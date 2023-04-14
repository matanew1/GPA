const transcriptService = require("../services/transcriptService")

// *** Home page 
exports.loadHomePage = async (req, res) => {
  const {filteredSemesters} = transcriptService.getTranscript()
  res.json(filteredSemesters);
};


