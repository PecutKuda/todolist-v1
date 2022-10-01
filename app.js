const express = require("express");
const bodyParser = require("body-parser");

//karena terletak dalam local storage dan bukan pada npm
const date = require(__dirname + "/date.js");

const app = express();
let items = ["Do Homework", "Take a Bath"];
let workItems = ["Making Journal"]; 

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

    //untuk memanggil function, maka gunakan nama file (date) + ()
    let day = date.getDate();
    //let day = date.getDay();

    //melakukan render (cek ke folder "views") dan mencari file "list".ejs
    //lalu menentukan value dari fieldTitle dari ejs == dengan day dan 
    //value newListItems dari ejs menjadi items.
    res.render("list", {fieldTitle: day, newListItems: items});
});

app.post("/", function(req, res) {
    let item = req.body.newItem;
    if (item.length > 0) 
    {
        if (req.body.list === "Work List")
        {
            console.log(req.body);
            workItems.push(item);
            res.redirect("/work");
        }
        else 
        {
            items.push(item);
            res.redirect("/");
        }
    }
    else console.error("Field cannot be empty!");
});

app.get("/work", function(req, res) {
    res.render("list", {fieldTitle: "Work List", newListItems: workItems});
})

app.get("/about", function(req, res) {
    res.render("about");
})

app.listen(3000, function() {
    console.log("Server started on port 3000");
})

