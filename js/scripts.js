$(document).ready(function(){
  $("#formOne").submit(function(event){
    const seasonInput = parseInt($("#season").val());



    $(".season").text(seasonInput);





  })
})