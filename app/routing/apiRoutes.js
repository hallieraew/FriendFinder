require('server.js');

app.get("/api/friends", function (req, res) {
    return res.json();
});

app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    console.log(newFriend);

    // create logic here for compatability between new friend and array of friends

    return req.json();
});