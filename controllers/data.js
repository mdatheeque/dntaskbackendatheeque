//importing Data model
const Data = require("../models/data");

//import JSDOM to calculate execution time
const { JSDOM } = require("jsdom");
const { window } = new JSDOM();

//******************************
//CREATE
//******************************

//add a data
exports.addAData = (req, res) => {
  const start = window.performance.now();
  const data = new Data(req.body);
  data.save((err, data) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save data in DB" + err,
      });
    }
    res.json({ data });
  });
  const stop = window.performance.now();
  console.log(
    ` { ${new Date().toLocaleString()} }Time Taken to execute addData API = ${
      (stop - start) / 1000
    } seconds`
  );
};

//******************************
//READ
//******************************

//export all data
exports.getAlldata = (req, res) => {
  const start = window.performance.now();
  Data.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to fetch" + err,
      });
    }
    res.json({
      data,
    });
  });
  const stop = window.performance.now();
  console.log(
    ` { ${new Date().toLocaleString()} }Time Taken to execute getAlldata API = ${
      (stop - start) / 1000
    } seconds`
  );
};

//******************************
//UPDATE
//******************************

//edit data
exports.editadata = (req, res) => {
  const start = window.performance.now();
  Data.findByIdAndUpdate({ _id: req.dataId }, req.body, (err, result) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to update data in DB" + err,
      });
    }
    res.json({
      result: result,
    });
  });
  const stop = window.performance.now();
  console.log(
    ` { ${new Date().toLocaleString()} }Time Taken to execute editData API = ${
      (stop - start) / 1000
    } seconds`
  );
};
