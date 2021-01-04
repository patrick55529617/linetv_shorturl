var express = require('express');
var router = express.Router();
var crypto = require('crypto')
var crud = require("../crud/crud_url")
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db');

router.use(express.json());


// This redirects the correct url saved in database.
router.get('/:id', async function (req, res) {
    id = req.params.id;
    var url = await crud.get_corresponding_url(id)
    res.redirect(url)
})


// This responds a POST request for the homepage
router.post('/', function (req, res) {
    url = req.body['url'];
    var id = crypto.randomBytes(10).toString('hex');
    crud.add_new_registered_url(id, url);
    // TODO: Use dynamic domain to implement.
    returnUrl = 'http://localhost:3000/' + id;
    res.send({"short_url": returnUrl});
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
