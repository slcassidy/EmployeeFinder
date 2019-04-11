// Hide the Modal at the beginning
const hideMod = function(){
    $(`.modal-dialog`).hide();
    console.log("Hide at the top");
    
    };
    
    // Call the hide function
    hideMod();

// Closing the model with the close option
$(`.close`).on("click", function () {
hideMod();
});

// Clear the Alert Button
$(`#alertB`).on("click", function () {
hideMod();  
}); // end of alert button
    

const survey = (() => {

// push the data into the table
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
       
    console.log(newSurvey);

      $.ajax({
        method: 'POST',
        url: 'api/employee',
        data: newSurvey
      })

    }
   
    // action based on the click button
    $('.btnSurvey').on('click', addSurvey)

    // 
    const results = function (event) {
        event.preventDefault();
        console.log("start results")
        
        // Here we grab the form elements
        const match =  function (dataList){
            var totalArray = [];
            var nameArray = [];
            let total = 0;
            let name = "";
            
            for (let i = 0; i < dataList.length - 1; i++){
                let last = dataList.length - 1
                // console.log(`Last array ${last}`)
                // console.log(`array ${i}`)

                // console.log(dataList[i].scores.length)
                // ********************add back

                for(let x = 0; x < dataList[i].scores.length - 1; x++){
                
                let diff = Math.abs(dataList[i].scores[x]) - Math.abs(dataList[last].scores[x]);
                // console.log(diff)
                total += diff;
                              
                    
                }
                name = dataList[i].name;
                console.log(`Name outside the for loop ${name}`)
                console.log(`total outside the for loop ${total}`)

                totalArray.push({total, name})
                // totalArray.push({total})
                // nameArray.push(name)
                console.log(totalArray)
                // *******************************
                
            }
            // spread operators ...[array]= which takes everything in the array and spreads the object to find the min. 
            // object destructing
            // Check the process to see about the min
            // ******************** add bak
            // let min = Math.min.apply(...totalArray)
            let min = 22
            console.log(min)
            let index = totalArray.indexOf(min)
            console.log(index)
            // console.log(totalArray[index].name)
            // **********************

             // Calling the Modal
    //   $('#myModal').on('shown.bs.modal', function () {
    //     $('#myInput').trigger('focus')
    //   });
    // ******************add back
      // Allowing the display of th Modal
      $('.modal-dialog').show();
    // modal-body append with <p>   
    const matchUp = $('<div>').addClass('match');
    matchUp.append(`<p>You have been matched with ${totalArray[0].name}</p>`);

    ${".modal-body"}.append(matchUp);

      console.log("show up!!");

          }
         
      console.log(match);
    //   **********************
  
        $.ajax({
          method: 'GET',
          url: 'api/employee',
        }).then(function(employeeList){
            // match(match, $('.tables'));
            // Append variables to the HTML
            match(employeeList);
          });
        }
      

      $('.btnSurvey').on('click', results)

    
  })();
   