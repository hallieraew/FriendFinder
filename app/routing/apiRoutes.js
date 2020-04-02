var friends = require('../data/friends');

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = req.body;
        console.log(newFriend);

        var bestMatch = 0;
        var lowestDiff = 50;

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }

            if (totalDifference < lowestDiff) {
                bestMatch = i;
                lowestDiff = totalDifference;
            }
        }

        friends.push(newFriend);

        res.json(friends[bestMatch]);

    });

};