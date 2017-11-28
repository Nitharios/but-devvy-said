// THIS IS NIGEL!!!!
const express = require('express');
const bodyParser = require('body-parser');
const debug = require('debug')('botkit:webserver');
const routes = require('./routes');
const passport = require('passport');
const session = require('express-session');
const db = require('./models');

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static(__dirname + '..' + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

/* routes */
app.use('/api', routes);

app.listen(PORT, () => {
  db.sequelize.sync({ force : false });
  console.log(`Server listening on port: ${PORT}`);
});