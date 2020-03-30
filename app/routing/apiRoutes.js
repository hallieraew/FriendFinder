var friends = require('../data/friends');
require('../../server');


app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    console.log(newFriend);

    for (var i = 0; i<friends.scores.length; i++){
        user.scores[i] = parseInt(user.scores[i]);
    }

    
    for(var i = 0; i < friends.length; i++) {
        var bestMatch = 0;
        var highestDiff = 50;
        var totalDifference = 0;
        for(var j = 0; j < friends[i].scores.length; j++) {
            var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
            totalDifference += difference;
        }
        
        if(totalDifference < highestDiff) {
            bestMatch = bestMatchIndex;
            bestMatchIndex= i;
            highestDiff = totalDifference;
        }
      }

      friends.push(user);

      res.json(friends[bestMatchIndex]);
    
    // create logic here for compatability between new friend and array of friends
    // need to loop through friends.length and determine scores and then for every new user score compute difference between new user and friends i

    return req.json(friends[bestMatchIndex]);
});