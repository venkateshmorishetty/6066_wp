$(document).ready(function(){
  // $('form').on('submit', function(){
    
  //   // var item = $('form input');
  //   var newdata = {'name': $('input[name=newtitle]').val(),
  //               'description': $('input[name=newdescription]').val(),
  //               'quantity': $('input[name=newquantity]').val(),
  //               };

  //     $.ajax({
  //       type: 'POST',
  //       url: '/home',
  //       data: todo,
  //       success: function(){
  //       //do something with the data via front-end framework
  //       location.reload();
  //       }
  //     });

  //     return false;

  //   });
    $('button').on('click', function(){
        
        var name = $(this).attr('name').replace(/ /g, "-");
        console.log(name);
        $.ajax({
          type: 'DELETE',
          url: '/home/' + name,
          success: function(){

          location.reload();
          }
        });
    });

   
  
  });