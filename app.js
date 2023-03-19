const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app= express();
const PORT= process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
let items=["Buy Food","Cook Food","Eat Food"];
let workListItems=[];

app.get("/",function(req,res){
    let today = new Date();
    let options={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day= today.toLocaleDateString("en-US", options);
    
    res.render("list",{listTitle:day,newListItems: items});
});

app.post("/",function(req,res){
    let item= req.body.newItem;
    if ( req.body.list=== "Work" ){
        workListItems.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req,res){
    res.render("list",{listTitle:"Work List",newListItems: workListItems});
});
app.get("/about", function(req,res){
    res.render("about");
});
app.listen(PORT, function(){
    console.log("Sever is running on port"+PORT);
})
