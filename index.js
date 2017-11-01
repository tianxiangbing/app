const express = require('express');
let app = express();
app.listen(process.env.PORT||8090);
app.use(express.static('static'));
