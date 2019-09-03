// Scroll up Button

$(function () {
    $(document).scroll(function () {
        $('#scrBtn').toggleClass('displayNone', $(this).scrollTop() < 300)
    })

})

$("#scrBtn").on("click", function() {
    $('html, body').animate({
       scrollTop: 15
    }, 800);
   });