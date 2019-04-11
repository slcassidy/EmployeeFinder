# EmployeeFinder

Added 
$ npm install express --save
$ npm install react-bootstrap bootstrap

####Changed code###

const survey = (() => {
    // $(function () {



// add the survey to the table
    const addSurvey = function (event) {
      event.preventDefault();
  
      // Here we grab the form elements
      const newSurvey = { 
        name: $(`#name`).val().trim(),
        photo: $(`#photoLink`).val().trim(),
        scores: [$('#q1').val(),
        $('#q2').val(),
        $('#q3').val(), 
        $(`#q4`).val(),
        $('#q5').val(),
        $('#q6').val(),
        $('#q7').val(),
        $('#q8').val(),
        $('#q9').val(),
        $('#q10').val()]
        };
       
    

    // **********************************Modal*******************************
    console.log(`Length of added Survey ${newSurvey.scores.length}`)
    console.log(newSurvey.scores[0]); 

    // Subtract the empoyee table scores for each line item fro the new survey
    // If the total is less than the previous results then
  

   
        
    
    // for(let i = 0; i < newSurvey.scores.length; i++){
    //     let diff = newSurvey.scores[i] - employeeList.scores[i];
    //     let total += diff;
    // }

    // action
    // if (check === 0) {
    //   // alert("Stock symbol is not valid. Please try again");
    //   // Calling the Modal
    //   $('#myModal').on('shown.bs.modal', function () {
    //     $('#myInput').trigger('focus')
    //   });
    //   // Allowing the display of th Modal
    //   $('.modal-dialog').show();
    //   console.log("show up!!");
  
    // } else {
    //   stocksList.push(stock);
    // };
    // *******************************End Modal*********************

      $.ajax({
        method: 'POST',
        url: '/api/employee',
        data: newSurvey
      })
      console.log(newSurvey);
    }
    
 


    const find = function(){
        for(let i = 0; i < employeeList.length; i++){
            console.log(Math.abs(employeeList.scores[i]))
            let diff = Math.abs(newSurvey.scores[i]) - Math.abs(employeeList.scores[i]);
            console.log(newSurvey.scores[i])
            console.log(employeeList.scores[i])
            total += diff;
            console.log(total)
    }

    const calculation = function(){

        // const compare = function(){
            // let total = "0"
            // let id = "0"
      
            
            // if(total < stotal){
            //     console.log("match")
            //     }
        // }
        // let stotal = total
        //     console.log(stotal)
    
        // };
        // compare();
        $.ajax({
          method: 'GET',
          url: 'api/employee'
        }).then(function(data){
        //   render(data, $('.employeeList'));
        
            // find();
            // console.log($(${employeeList})


        // console.log($`Total info ${total}`)
        });
      }

      $(`.btnSurvey`).on("click", addSurvey);
      $(`.btnSurvey`).on("click", calculation);
      