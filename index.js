const express = require('express')

const app = express()

app.get("/", (req, res) => {

  res.send("Hellow there this is simple express server");
})

app.listen(3000, () =>{console.log("app started on port 3000")});
