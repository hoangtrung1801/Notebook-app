const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);

const cookieParser = require('cookie-parser');
const _ = require('lodash');
const shortid = require('shortid');

const port = process.env.PORT || 9080;

// Declare
const cookieMiddleware = require('./middlewares/cookie.middleware');

// Set views
app.set('views', './views');
app.set('view engine', 'pug');

// Set static file
app.use(express.static('public'));

// Body parser
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Middlewares
app.use(cookieParser());
app.use(cookieMiddleware);

server.listen(port, () => {
  console.log('Open port ' + port);
})

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/', (req, res) => {
  let data = res.locals.data;
  let id = shortid.generate();
  data = [
    ...data,
    {
      id: id,
      title: 'New page'
    }
  ]
  res.cookie('data', JSON.stringify(data));

  res.redirect('/'+id);
})

app.get('/:id', (req, res) => {
  let item = _.find(res.locals.data, {id: req.params.id});
  res.render('page', {
    curItem: item
  })
})

app.post('/save/:id', (req, res) => {
  // set lai cookie
  let data = res.locals.data;
  _.find(data, {id: req.params.id})
    .content = req.body.content;
  res.cookie('data', JSON.stringify(data));

  res.redirect('/'+req.params.id);
})