$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const seasonInput = parseInt($("#season").val());
    const hogwartsInput = parseInt($("#hogwarts").val());
    // If they select 1 (Winter) AND
    // 1 (Gryf) , then "Date: Father Winter"
    // 1 (Slyth) , then "Date: Father Christmas"



    // If they select 2 (Spring), then match them with Lady of the Lake.
    // If they select 3 (Summer), then match them with the Sun God.
    // If they select 4 (Fall), then match them with Lady Gaga.
    // If they select 1 (Gryffindor), 





    if (seasonInput === 1 && hogwartsInput === 1) {
      $(".answers").text("You should date Father Winter")

      
    } else if (seasonInput === 2){
      $(".answers").text("You should date Lady of the Lake")
    } else if (seasonInput === 3){
      $(".answers").text("You should date the Sun God")
    } else {
      $(".answers").text("You should date Lady Gaga")
    } 

    $(".answers").show();


  })
})