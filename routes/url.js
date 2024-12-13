const express = require("express");
const {
  handleGenerateNewShortURL,
  handleGetananlytics,
  handleRedirectURL,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", handleRedirectURL);

router.get("/analytics/:shortId", handleGetananlytics);

module.exports = router;
