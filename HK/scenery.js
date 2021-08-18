//開啟isotope
var $grid = $(".grid").isotope({
    itemSelector:".items"
});
//layout Isotope after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.isotope('layout');
});


$('.filters').on('click','button',function(){
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});

//抓全部
$('.allbuttons').on('click','button',function(){
    $grid.isotope({
        filter: '.items'
    });
});
