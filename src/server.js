const express = require('express');
// const path = require('path');
// const handleCookieSessions = require('./middleware/handle-cookie-sessions');
const router = require('./router');
// const logRoutes = require('./middleware/log-routes');

const app = express();
const port = process.env.PORT || 8080;
const host = process.env.HOST || '127.0.0.1';

//configuration,routs

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});

// app.use(handleCookieSessions);  // adds a session property to each request representing the cookie
app.use(logRoutes);       // print information about each incoming request
app.use(express.json());  // parse incoming request bodies as JSON
app.use(express.static(path.join(__dirname, '..', 'public'))); // Serve static assets from the public folder

app.use('/api', router);

// Requests meant for the API will be sent along to the router.
// For all other requests, send back the index.html file in the public folder.
app.get('*', (req, res, next) => {
  if (req.originalUrl.startsWith('/api')) next();
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
