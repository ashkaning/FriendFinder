var people = require("../data/friends");


module.exports = function(app) {

  
    app.post("/api/friends", function(req, res) {
        res.json(people);
    });
  };
  