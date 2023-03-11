const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require("body-parser");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb+srv://jorneytech04:D1FQuwxkY78rTTJK@connectassistance.ah2ohjv.mongodb.net/CarsDb?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes());

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log("El servidor esta funcionando en el puerto 3000");
});
