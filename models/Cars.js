const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const carsSchema = new Schema(
  {
    year: {
      type: Number,
      trim: true,
    },

    make: {
      type: String,
    },

    model: {
      type: String,
    },

    color: {
      type: String,
    },

    plate: {
      type: String,
    },

    vin: {
      type: String,
    },
  },

  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Cars", carsSchema);
