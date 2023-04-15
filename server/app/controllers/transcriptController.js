const transcriptService = require("../services/transcriptService")

// *** Home page 
exports.loadHomePage = async (req, res) => {
  const { filteredSemesters } = await transcriptService.getTranscript()
  console.log(filteredSemesters)
  res.json(filteredSemesters);
};


