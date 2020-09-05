const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;
const caseRoutes = require("./routes");

require("./config/database");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "static")));

app.use(caseRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
