const express = require('express');
const cors = require('cors');
const config = require('./config');
const { sequelize } = require('./models');

// express server instance
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api', require('./routes'));

// serve client static build assets
if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'staging'
) {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// 404 handler
app.use(function (req, res, next) {
  res.status(404).send({
    message: 'Not Found',
  });
});

// synchronize all tables
sequelize.sync().then(() => {
  app.listen(config.PORT);
  console.log(`server is running on ${config.PORT}`);
});
