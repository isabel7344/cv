// $(function () {
//     $(".navbar a, footer a").on("click", function (event) {
//         event.preventDefault();
//         var hash = this.hash;
//         $('body,html').animate({ scrollTop: $(hash).offset().top }, 900, function () { window.location.hash = hash; })


//     });
// })

var text = document.getElementById('text');
var typewriter = new Typewriter(text, {
    loop: true
});
typewriter.typeString('Hello, I\'m Isabel Fofana ')
    .pauseFor(150)
    .typeString('Développeuse Web !')
    .start();

   