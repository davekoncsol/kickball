const Baller = require('../models/baller');

module.exports = {
    index,
    addComment,
    delComment,
    show,
    edit

}

function show(req,res){
    Baller.findById(req.params.id, function(err, baller){
      let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
      let sortKey = req.query.sort || 'name';
      Baller.find(modelQuery)
      .sort(sortKey).exec(function(err, ballers) {
        console.log(ballers)
      if (err) return next(err);
      res.render('ballers/show', {title: 'Player Page', 
      baller, ballers, user: req.user, name:req.query.name, sortKey
    })
    })
})
}
function index(req, res, next) {
    console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Baller.find(modelQuery)
    .sort(sortKey).exec(function(err, ballers) {
        console.log(ballers)
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('ballers/index', { 
        ballers, 
        user: req.user,
        name: req.query.name, 
        sortKey
       });
    });
  }
  
  function addComment(req, res, next) {
    req.user.comments.push(req.body);
    req.user.save(function(err){
      res.redirect('/ballers');
    })
    
  }
  
  function delComment(req, res, next) {
  
  }

  function edit(req,res){
    
  }
  