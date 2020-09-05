const Case = require("../models/case");

module.exports = {
  getAllCases: async (req, res) => {
    const cases = await Case.find();
    return res.render("index", { cases });
  },

  getSingleCase: async (req, res) => {
    const { countryId } = req.params;
    const singleCase = await Case.findOne({ _id: countryId });
    return res.render("detail", { singleCase });
  },
};
