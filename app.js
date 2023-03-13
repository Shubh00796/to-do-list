const express = require("express")
const bodyParser = require("body-parser")
const  date = require(__dirname + "/date.js" )

const app = express();
let items = ["Buy Food", "Eat Food", "Cook Food"];
let workitems = [];
//crate the views folder in which you need to create the ejs file
app.set('view engine','ejs');//inorder to run html file in js you need to initilizze the ejs with view engine
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))

app.get("/", (req, res) =>{
  let day =  date.getdate();


    res.render("list", {listTitle: day,newlistitem:items});
});
app.post("/",(req,res) =>{
let item =req.body.newItem;

if (req.body.list === "Work"){
  workitems.push(item);
  res.redirect("/work")
}
else{
  items.push(item);
  res.redirect("/");
}
});

app.get("/work",(req,res) =>{
  res.render("list",{listTitle:"Work list",newlistitem : workitems});
});
app.post("/work",(req,res) =>{
  let item = req.body.newItem;
  workitems.push(item);
  res.redirect("/work");
});



app.listen(3000, (req, res)=>{
     console.log("The Server has started on PORT 3000:");
});
