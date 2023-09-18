const express = require('express');
const router = express.Router();
const {getSubdomainData} = require('../system/subdomainData');
const {getSiteData} = require('../system/siteData');

console.log(process.cwd());
const {repoDir, subdomainDir} = require("../config/fs.config.js");
  // repos: "home/fdpCloud/sites/",
  // subdomains: "etc/apache2/sites-available/subdomains.d",
const siteRoot = "http://localhost/tmp/checkouts/bezkoder/vue-js-node-js-express-mysql/root/home/fdpCloud/sites/";

/* GET sites listing. */
router.get('/', async function(req, res, next) {
  const subdomains = await getSubdomainData(subdomainDir);
  const sites = await getSiteData(repoDir, subdomains);
  res.render('siteList', { title: 'Sites', siteRoot, sites });
});

module.exports = router;

