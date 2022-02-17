//Getting express router
const express = require("express");
const router = express.Router();

//getting required controllers - data controllers
const {
  addAData,
  getAlldata,
  editadata,
} = require("../controllers/data");

//getting required controllers - logs controllers
const {addLog, getAlllogs} = require("../controllers/log");

//fetching parameter
router.param('dataId', (req, res, next, id) => {
  req.dataId = id
  next()
} )

//updation and addition routes
router.post("/addadata",addLog, addAData);
router.put("/editadata/:dataId",addLog, editadata);

//get routes
router.get("/getalldata", getAlldata);
router.get("/getalllogs", getAlllogs);


module.exports = router;
