let employeeList = require('../data/employee.js');

module.exports = function (app) {

  /**
   * GET the Employee list
   */
  app.get('/api/employee', function (req, res) {
    res.json(employeeList);
  });


//   const addSurvey = 
   app.post('/api/employee', function (req, res) {
        // req.body = info
    
    // pulls all the information
    //   employeeList.push(req.body); 

    //   new way
      employeeList.push(req.body);

    res.json(employeeList);
    console.log(req.body)
     
    res.end();
  });


    
  }

