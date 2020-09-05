const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://prinart:kwametawiah@dev.zzw33.mongodb.net/covid_anchor",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected successfully."))
  .catch((err) => console.log(err));
