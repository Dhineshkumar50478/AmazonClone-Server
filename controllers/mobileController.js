const mobileModel = require("../models/mobileModel");

exports.getMobileData = async (req, res) => {
  try {
    const queryObject = req.query;

    // Await the query to get the results
    const products = await mobileModel.find(queryObject);

    // Respond with the fetched data
    res.status(200).json(products);
  } catch (err) {
    console.error(err); // Use console.error for logging errors
    // Send a response indicating the error
    res.status(500).json({ message: "An error occurred while fetching mobile data." });
  }
};
