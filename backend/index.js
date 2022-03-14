const express = require('express')
const connecttoDB = require("./db");
var cors = require('cors')
const app = express()
app.use(cors())
try {
    connecttoDB();
} catch (error) {
    console.log("Database is not connected");
}
app.use(express.json());

const port = 5000
app.use('/api/student', require('./routes/student'));
app.use('/api/university', require('./routes/university'));

app.listen(port, () =>
    console.log(`Server is listening on port ${port}!`)
);
