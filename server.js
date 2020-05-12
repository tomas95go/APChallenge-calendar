const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

/** Start: Entry Point of the app routes **/
app.use('/', (req, res) => {
    res.send(`it's alive!`);
});
/** End: Entry Point of the app routes**/
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
