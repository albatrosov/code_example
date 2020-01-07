  $(function(){

    // просто взял стандартную реализацию из некоторых прошлых проектов
    // проверяет просто на заполненность полей, отправляет аякс и 
    // выполняет функцию по завершению

    // ==MAIN SCRIPTS==
   // ==FORMS VALIDATION==
   function formValidation(formSelector, submitText, completeFunction){ // form selector - string
    $(formSelector + ' input[type="submit"]').on('click', function(e){
      e.preventDefault();
      var data = $(formSelector).serialize();
      $(formSelector + ' input').each(function(i, el){
        if($(el).val() == '' && $(el).attr('type') != 'hidden'){
          $(el).addClass('err')
        } else {
          $(el).removeClass('err')
        };
      });  
      if($(formSelector + ' input.err').length > 0){
    
      } else {
        $.ajax({
            type: 'post',
            // url:'',
            data: data,
            beforeSend: function(){
              $(formSelector +' input[type="submit"]').prop('disabled', true);
              $(formSelector + ' input[type="submit"]').val(submitText);
            },
            success: function() {
            },
            error: function() {
            },
            complete: function() {              
              completeFunction(formSelector)
            }
        });  
      };
    });
  };
  formValidation('.hero__form', 'Downloading...', submit);
  
  // ==FORMS COMPLETE SCRIPTS==
  function submit(formSelector){
    $(formSelector + ' input, ' + formSelector + ' p').hide();
    $(formSelector).prepend('<h3>Thank you!</h3>')
  };

})
  