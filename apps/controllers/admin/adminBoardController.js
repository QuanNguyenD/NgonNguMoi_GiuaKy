
var path = require("path");

var express = require("express");
var router = express.Router();

router.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../views/admin/index.html"));
});
module.exports = router;
