let answer = $("#answer")
answer.hide();
$(document).ready( function(){
  $("#flip-card").click( function(){
    answer.toggle();
  })
})