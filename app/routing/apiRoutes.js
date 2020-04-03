var friends = require('../data/friends');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        // setting variable for the survey responses
        var newFriend = req.body;
        console.log(newFriend);

        // setting a bestMatch to start at 0 so we can add diff for each user comparison
        var bestMatch = 0;
        // setting a lowestDiff above the highest variance possible so every user with be a match, determining what the lowest diff will be below
        var lowestDiff = 50;

        // looping through the friends array
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            // looping through the scores for each friend
            for (var j = 0; j < friends[i].scores.length; j++) {
                // finding the difference by comparing scores of the new friend against current friends using math.abs so the number is absolute and not negative
                var difference = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
                // adding the difference found to the totalDifference
                totalDifference += difference;
            }
            // determining if totalDifference is less than the lowestDiff set above
            if (totalDifference < lowestDiff) {
                // setting bestMatch as index of friend
                bestMatch = i;
                // lowestDiff redefined to the totalDiff
                lowestDiff = totalDifference;
            }
        }
        // push newFriend into the friends array after doing the comparison
        friends.push(newFriend);
        // res in json is friends with bestmatch determined index
        res.json(friends[bestMatch]);

    });

};