const survey = (() => {


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
      console.log(newSurvey);
    }
    
    $('.btnSurvey').on('click', addSurvey)
    
  })();
  