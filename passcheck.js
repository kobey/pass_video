$(document).ready(function(){
        
$("#submit").click(function() {
      if ($("input#pwd").val() == "bunkersluts") {
        $(".disabled").attr('controls',true);
        $(".error").text("nice!");
          
      }else    
      $(".error").text("wrong password, ask the admin or try again.");
});

   });