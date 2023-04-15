const transcriptService = require("../services/transcriptService")

// *** Home page 
exports.loadHomePage = async (req, res) => {
  const { filteredSemesters } = await transcriptService.getTranscript()
  res.json(filteredSemesters);
};

exports.addData = async (req, res) => {
  const { year, semester, grades } = req.body;

  // validate data
  if (!year || !semester || !grades || !Array.isArray(grades)) {
    return res.status(400).json({ message: 'Invalid data' });
  }

  try {
    await transcriptService.addTranscript({ year, semester, grades });
    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
}



