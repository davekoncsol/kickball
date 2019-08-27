var express = require('express');
var router = express.Router();
var ballersCtrl = require('../controllers/ballers')

// GET /ballers
router.get('/ballers', ballersCtrl.index);

router.get('/ballers/:id', ballersCtrl.show);
router.get('/ballers/:id/edit', ballersCtrl.edit);

router.put('/ballers/:id', ballersCtrl.update)

// POST /facts
// We will already have access to the logged in student on
// the server, therefore do not use: /ballers/:id/facts
router.post('/comments/:id', ballersCtrl.addComment);

// DELETE /Comments/:id
router.delete('/comments/:id', ballersCtrl.delComment);

 // Insert this middleware for routes that require a logged in user
 function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;
