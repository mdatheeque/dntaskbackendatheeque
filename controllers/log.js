//import Log model
const EachLog = require("../models/log");

//import JSDOM to calculate execution time
const { JSDOM } = require("jsdom");
const { window } = new JSDOM();


//******************************
//CREATE
//******************************

//create a log
exports.addLog = (req, res, next) => {
  const start = window.performance.now();
  const eachLog = new EachLog(req.body);
  eachLog.save((err, eachlog) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to save log in DB" + err,
      });
    }
    const stop = window.performance.now();
    console.log(
      ` { ${new Date().toLocaleString()} } }Time Taken to execute addLog API = ${
        (stop - start) / 1000
      } seconds`
    );
    next();
  });
};

//******************************
//READ
//******************************

//export all logs
exports.getAlllogs = (req, res) => {
  const start = window.performance.now();
  EachLog.find({}).exec((err, logs) => {
    if (err) {
      return res.status(400).json({
        err: "NOT able to fetch" + err,
      });
    }
    res.json({
      logs,
    });
  });
  const stop = window.performance.now();
  console.log(
    ` { ${new Date().toLocaleString()} }Time Taken to execute getAlllogs API = ${
      (stop - start) / 1000
    } seconds`
  );
};
