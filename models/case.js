const { Schema, model } = require("mongoose");

const caseSchema = new Schema({
  FIPS: String,
  Admin2: String,
  Province_State: String,
  Country_Region: String,
  Last_Update: String,
  Lat: Number,
  Long_: Number,
  Confirmed: Number,
  Deaths: Number,
  Recovered: Number,
  Active: Number,
  Combined_Key: String,
  Incidence_Rate: Number,
  "Case-Fatality_Ratio": Number,
});

module.exports = model("Case", caseSchema);
