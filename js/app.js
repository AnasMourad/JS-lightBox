var $overlay = $('<div id="overlay"></div>');

var $image = $('<img>');
$overlay.append($image);
$("body").append($overlay);
$overlay.hide();
$("#imageGallery a").click(function(event){

    var href = $(this).attr("href");
    event.preventDefault();
    $overlay.show("100");
});

