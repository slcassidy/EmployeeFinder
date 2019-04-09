const path = require('path');
module.exports = function (app) {


    // app.use(express.static(path.join(__dirname, 'public')));

    app.get('/home', function (req, res) {
      // res.sendFile(path.join(__dirname,'../../public/home.html'));
      res.sendFile(path.join(__dirname,'/../public/home.html'));
    });

    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname,'/../public/survey.html'));
      });
  

    // ../../public/employee.js
  

  }