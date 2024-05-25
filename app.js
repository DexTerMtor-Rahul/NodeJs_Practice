const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');
const app = express();

//this step allows to call pug file from any where
//by giving the directory globally
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));

//used for passes a staic directory to use any where in file
//like using css from public folder in any where
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.pageNotfound);

app.listen(3000);
