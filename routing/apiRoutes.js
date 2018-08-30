var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;
var router = new express.Router();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var friends = [
    {
        routeName: "mickey",
        name: "Mickey Mouse",
        url: "https://www.funstra.com/media/catalog/category/mickey-mouse-toys.png",
        score: 15,
        difference: 0
    },
    {
        routeName: "minnie",
        name: "Minnie Mouse",
        url: "https://www.funstra.com/media/catalog/category/minnie-mouse-toys.png",
        score: 10,
        difference: 0
    },
    {
        routeName: "goofy",
        name: "Goofy",
        url: "https://i.pinimg.com/236x/ec/bc/72/ecbc72366f72db349069ec07f506d643--goofy-disney-disney-fan.jpg",
        score: 25,
        difference: 0
    },
    {
        routeName: "donaldduck",
        name: "Donald",
        url: "http://images2.fanpop.com/images/photos/6000000/Donald-Duck-Icon-donald-duck-6040676-200-200.jpg",
        score: 13,
        difference: 0
    },
    {
        routeName: "daisyduck",
        name: "Daisy",
        url: "https://www.animationartwork.com/artwork/imagery/h.513-1004.jpg",
        score: 19,
        difference: 0
    }
];
var match = [];
router.get("/friend", function(req, res){
    return res.json(match);
});

router.post("/friend", function(req, res){
    var newFriend = req.body;
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    var differenceArr =[];
    
    var matchName;
    // console.log(newFriend);
    for(var i=0; i<friends.length; i++){
        var diff = newFriend.score - friends[i].score; 
        if(diff <0){
            diff = 0-diff;
        }
        differenceArr.push(diff);
        friends[i].difference = diff;
    }
   
    differenceArr.sort(function(a, b){return a - b});
    console.log(differenceArr);
    for(var i=0; i<friends.length; i++){
        if(friends[i].difference == differenceArr[0]){
           match.push(friends[i]);
        }
    }
    friends.push(newFriend);
    console.log(match);
    res.json(match);
});

module.exports = router;
