 $(window).load(function(){
      
$(".nav > li.mega-dropdown").eq( 0 ).append("<p class='arrow1 arrOw'><span></span></p>");
$(".nav > li.mega-dropdown").eq( 1 ).append("<p class='arrow2 arrOw'><span></span></p>");
    
$(".nav > li.mega-dropdown").eq( 0 ).click(function () {
    //x = $(".mega-dropdown.open").position();
    x = $(this).position();
    aa = x.left+75;
    $(this).find(".arrow1").css("left", aa);
});
$(".nav > li.mega-dropdown").eq( 1 ).click(function () {
    //x = $(".mega-dropdown.open").position();
    x = $(this).position();
    aa = x.left + 75;
    $(this).find(".arrow2").css("left", aa);
});


    });

  // tell the embed parent frame the height of the content
    if (window.parent && window.parent.parent){
      window.parent.parent.postMessage(["resultsFrame", {
        height: document.body.getBoundingClientRect().height,
        slug: "ygP3G"
      }], "*")
    }
