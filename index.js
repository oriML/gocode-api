
const express = require('express');
const dbConnection = require('./config/mongodb');
const cors = require('cors');

const port = 8000;

const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', routes);

app.listen(port, () => {
    dbConnection()
    .then(() => console.log('db connected'))    
    .catch(console.log);
    
    console.log(`PORT ${port}`);
});
