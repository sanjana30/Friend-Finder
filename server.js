var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;
var chartRoutes = require("./routing/apiRoutes");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var friends = [
//     {
//         routeName: "divyansh",
//         name: "Divyansh",
//         url: "https://placehold.it/200x200",
//         score: 15,
//         difference: 0
//     },
//     {
//         routeName: "sushmita",
//         name: "Sushmita",
//         url: "https://placehold.it/200x200",
//         score: 10,
//         difference: 0
//     },
//     {
//         routeName: "sujai",
//         name: "Sujai",
//         url: "https://placehold.it/200x200",
//         score: 25,
//         difference: 0
//     },
//     {
//         routeName: "nikita",
//         name: "Nikita",
//         url: "https://placehold.it/200x200",
//         score: 13,
//         difference: 0
//     }
// ];
// var match = [];

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "public/home.html"));
});
app.get("/form", function(req, res){
    res.sendFile(path.join(__dirname, "public/survey.html"));
});
// app.get("/api/friend", function(req, res){
//     return res.json(match);
// });

// app.post("/api/friend", function(req, res){
//     var newFriend = req.body;
//     newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
//     var differenceArr =[];
//     for(var i=0; i<friends.length; i++){
//         var diff = newFriend.score - friends[i].score; 
//         if(diff <0){
//             diff = 0-diff;
//         }
//         differenceArr.push(diff);
//         friends[i].difference = diff;
//     }
   
//     differenceArr.sort(function(a, b){return a - b});
//     console.log(differenceArr);
//     for(var i=0; i<friends.length; i++){
//         if(friends[i].difference == differenceArr[0]){
//            match.push(friends[i]);
//         }
//     }
//     console.log(match);
//     res.json(match);
// });
app.use(chartRoutes);
app.listen(PORT, function(){
    console.log("App listening on port : "+PORT);
});