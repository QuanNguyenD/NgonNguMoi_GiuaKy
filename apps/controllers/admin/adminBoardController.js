var path = require("path");
var express = require("express");
var router = express.Router();

router.use(express.static(path.join(__dirname, "../../views/admin")));

router.get("/maps", function (req, res) {
    res.sendFile(path.join(__dirname, "../../views/admin/maps/googlemaps.html"));
});
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../views/admin/indexAdmin.html"));
});

module.exports = router;