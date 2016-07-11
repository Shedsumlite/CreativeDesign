//script.js

$('.navbar-buttons').hover(function() {
    $(this).stop().animate({ fontSize : '14pt' });
}, function() {
    $(this).stop().animate({ fontSize: '12pt' }, 500);
});

$('.contact').hover(function() {
    $(this).stop().animate({
     width : '150px',
     height: '60px',
     marginTop: '30px',
     fontSize: '20pt',
     borderRadius: '15px',
    });

}, function() {
    $(this).stop().animate({
     width: '120px',
     height: '50px',
     marginTop: '35px',
     fontSize: '20px',
     borderRadius: '15px',
     });
});


$('.icon').hover(function() {
    $(this).stop().animate({
     width : '300px',
     height: '300px',
     marginTop: '15%',
     filter: 'grayscale(0%)',
    });

}, function() {
    $(this).stop().animate({
     width: '240px',
     height: '240px',
     marginTop: '25%',
     });
});
