const express = require("express")
const bodyParser = require("body-parser");
const { stnList, minStops } = require('./minStops.js');

const app = express()
app.use(bodyParser.json());

app.post("/", (req, res) => {
    const result = minStops(stnList, req.body.start, req.body.end)
    res.json({"hello": result})
})

app.listen(3000)