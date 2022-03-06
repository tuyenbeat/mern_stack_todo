const express = require('express');
const app = express();
require('dotenv').config();
const bodyparder = require('body-parser');
const database = require('../src/Config/ConnectDB');
const Route = require("./Router/Routing")

database.connect();
app.use(bodyparder.json());
app.use(bodyparder.urlencoded({ extended: true }));

app.use('/api/v1',Route);
app.use("*", (req, res) => {
    res.send("404 NOT FOUND")
})
const PORT = process.env.PORT_HOST || 3456;
app.listen(PORT, () => {
	console.log('create server');
});
