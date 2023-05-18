const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const loginRouter = require('./api/login');
const regisRouter = require('./api/regis');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use('/login', loginRouter);
app.use('/regis', regisRouter);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
