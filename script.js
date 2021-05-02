(function($){
  
  $(document).ready(function() {

    // Initialize Isotope
    var $container = $('.product-grid');
    $container.isotope({
      itemSelector: '.grid-product',
      layoutMode: 'masonry'
    });

    // Setup filtering with dropdowns.
    var $filterSelects = $('.filter-grid select');
    var performFilter = function() {
      var filterVal = ( $(this).val() == '*' ) && '*' || '.'+$(this).val();
      $container.isotope({ filter: filterVal });
    };
    $filterSelects.on( 'change', performFilter );

   

  }); // Document Ready

})(jQuery); // Map jQuery => $