const Car = require("../models/Cars");

exports.getCars = function (req, res) {
  Car.find(function (err, car) {
    if (err) res.send(500, err.message);
    res.status(200).jsonp(car);
  });
};

exports.getCarById = function (req, res) {
  Car.findById(req.params.idCar, function (err, car) {
    if (err) res.send(500, err.message);
    res.status(200).jsonp(car);
  });
};

exports.addCar = function (req, res) {
  var cars = new Car(req.body);
  cars.save(function (err, car) {
    if (err) return res.send(err);
    return res.status(200).jsonp(cars);
  });
};
