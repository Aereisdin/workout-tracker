var path = require("path");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
  
  app.get("exercise", function(req, res) {
    console.log(`sending you exercise`);
    res.sendFile("../pubic/exercise.html");
  });
};
