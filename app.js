const express = require("express")
const path = require("path")
const mustacheExpress = require("mustache-express")

const app = express()

app.engine("mustache", mustacheExpress())
app.set("views", "./views")
app.set("view engine", "mustache")

//Listening on root
app.get("/todo/", function(req, res) {
  // TODO write your code here
  const list = {
    listy: [
      { item: "Learn Node basics" },
      { item: "Learn Express basics" },
      { item: "Learn Mustache" },
      { item: "Learn HTML forms with Express" },
      { item: "Learn about authentication" },
      { item: "Learn how to connent to PostgreSQL" },
      { item: "Learn how to create databases" },
      { item: "Learn SQL" },
      { item: "Learn how to connect to PostgreSQL from Node" },
      { item: "Learn to use Sequelize" }
    ]
  }
  res.render("todo", list)
})

app.listen(3000, function() {
  console.log("Successfully started express application!")
})
