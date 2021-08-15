const shortid = require('shortid');

module.exports = (req, res, next) => {
  if(req.cookies.data) {
    res.locals.data = JSON.parse(req.cookies.data);
  } else {
    res.locals.data = [
      {id: shortid.generate(), title: 'New page'}
    ]
    res.cookie('data', JSON.stringify(res.locals.data));
  }

  next();
} 