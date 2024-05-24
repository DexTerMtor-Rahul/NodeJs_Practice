const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const app = express();

//this step allows to call pug file from any where
//by giving the directory globally
app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

//used for passes a staic directory to use any where in file
//like using css from public folder in any where
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: '404 Error' });
});

app.listen(3000);
