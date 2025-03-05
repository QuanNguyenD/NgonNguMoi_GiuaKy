var express = require("express");
var router = express.Router();
router.use("/home", require(__dirname + "/homecontroller"));
router.use("/product", require(__dirname + "/productcontroller"));
router.use("/service", require(__dirname + "/servicecontronller"));

router.use("/admin", require(__dirname + "/admin/authenticatecontronller"));
router.use("/admin", require(__dirname + "/admin/adminBoardController"));

router.get(["/", "/index.html"], function (req, res) {
    //res.json({"message": "this is index page"});
    res.render("index.ejs");
});

// router.get(["/admin", "/admin/index.html"], function (req, res) {
//     //res.json({"message": "this is index page"});
//     res.render("/admin/index.html");
// });
module.exports = router;
