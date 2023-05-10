const express = require('express');
const http = require('http');
require("./db/conn");
const randomstring = require('randomstring');
const URL = require("./model/url.model");

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/short", async (req, res) => {

    const url = req.body.url;
    const code = randomstring.generate(7);
    const obj = { url, code };

    const insertData = URL({
        code: code,
        url: url
    });
    const saveData = await insertData.save();

    const result = 'localhost:8000/short/' + code;
    console.log("result::", result);

    res.json({
        message: "Short URL Generated",
        status: 200,
        code: result
    })

});

app.post("/short/:code", async (req, res) => {

    const code = req.params.code;
    const result = await URL.findOne({ code: code })

    res.json({
        message: "Get Original Website",
        status: 200,
        shortUrl: result.url
    })

});

server.listen(8000);