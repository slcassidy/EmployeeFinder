let employeeList = require('../../data/employee.js');

module.exports = function (app) {

  /**
   * GET the Employee list
   */
  app.get('/api/employee', function (req, res) {
    res.json(employeeList);
  });



//   $(function () {

//     /**
//      * Get the form info from the page.
//      * Clear the form. 
//      * Send the data in a POST request.
//      */
//     const addSurvey = function (event) {
//       event.preventDefault();
  
//       // Here we grab the form elements
//       const newReservation = {
//         customerName: $('#reserve-name').val().trim(),
//         phoneNumber: $('#reserve-phone').val().trim(),
//         customerEmail: $('#reserve-email').val().trim(),
//         customerID: $('#reserve-unique-id').val().trim()
//       };
  
//       // Clear the form when submitting
//       $('#reserve-name').val('');
//       $('#reserve-phone').val('');
//       $('#reserve-email').val('');
//       $('#reserve-unique-id').val('');
  
//       $.ajax({
//         method: 'POST',
//         url: 'api/tables',
//         data: newReservation
//       })
//     }
  
//     $('.submit').on('click', addSurvey)
//   });

}