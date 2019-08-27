const Baller = require('../models/baller');

module.exports = {
  index,
  addComment,
  delComment,
  show,
  edit,
  update

}

function show(req, res) {
  Baller.findById(req.params.id).populate('comments').exec(function (err, baller) {
    let modelQuery = req.query.name ? {
      name: new RegExp(req.query.name, 'i')
    } : {};
    let sortKey = req.query.sort || 'name';
    Baller.find(modelQuery)
      .sort(sortKey).exec(function (err, ballers) {
        console.log(ballers)
        if (err) return next(err);
        res.render('ballers/show', {
          title: 'Player Page',
          baller,
          ballers,
          user: req.user,
          name: req.query.name,
          sortKey
        })
      })
  })
}

function index(req, res, next) {
  console.log(req.query)
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  let modelQuery = req.query.name ? {
    name: new RegExp(req.query.name, 'i')
  } : {};
  // Default to sorting by name
  let sortKey = req.query.sort || 'name';
  Baller.find(modelQuery)
    .sort(sortKey).exec(function (err, ballers) {

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
  Baller.findById(req.params.id, function (err, baller) {
    Baller.findById(req.user.id, function (err, baller2) {
      req.body.name = baller2.name
      req.body.avatar = baller2.avatar
      req.body.ballerId = baller2._id

      baller.comments.push(req.body);
// let name = baller2.name
//       baller.comments.commenter.push(name)
      console.log(baller)
      baller.save(function (err) {
        res.redirect('/ballers');


      }) 


      


    })
  })

}

function edit(req, res) {
  Baller.findById(req.params.id).populate('comments').exec(function (err, baller) {
    let modelQuery = req.query.name ? {
      name: new RegExp(req.query.name, 'i')
    } : {};
    let sortKey = req.query.sort || 'name';
    Baller.find(modelQuery)
      .sort(sortKey).exec(function (err, ballers) {
        
        if (err) return next(err);
        res.render('ballers/edit', {
          title: 'Player Page',
          baller,
          ballers,
          user: req.user,
          name: req.query.name,
          sortKey
        })
      })
  })
}

function update(req, res) {
  Baller.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  }).then(function (baller) {
    res.status(200).json(puppy)
  })
  console.log(req.body)
  console.log(req.body.value)

  res.redirect(`/ballers/${req.params.id}`)

}

function delComment(req, res, next) {
  Baller.findOne({'comments._id': req.params.id}, function(err, baller){
    baller.comments.id(req.params.id).remove();
    baller.save(function(err) {
      res.redirect('/ballers')
    })
  })

}