const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api-routes/index');

app.use(cors());

app.use(bodyParser.json());

/** Start: Entry Point of the app routes **/
app.use('/', routes);
/** End: Entry Point of the app routes**/
app.listen(port, () => console.log(`The app runs on port: ${port}!`));
