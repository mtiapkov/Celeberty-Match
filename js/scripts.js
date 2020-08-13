$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const seasonInput = parseInt($("#season").val());
    const hogwartsInput = parseInt($("#hogwarts").val());

    if (seasonInput === 1 && hogwartsInput === 1) {
      $(".answers").text("You should date Father Winter")
    } else if (seasonInput === 1 && hogwartsInput === 2){
      $(".answers").text("You should date Lady of the Lake")
    } else if (seasonInput === 2 && hogwartsInput === 1){
      $(".answers").text("You should date the Sun God")
    } else {
      $(".answers").text("You should date Lady Gaga")
    } 

    $(".answers").show();


  })
})