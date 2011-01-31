// jQuery.upcase plugin 
//
// Convert an item's text to upper case.
// This is a simple plugin to demonstrate
// how to write an item iteration.
//
// Example:
//   $('.foo').upcase();

(function( $ ){
    $.fn.upcase = function() {
	      return this.each(function() {
	          var $this = $(this);
	          var text = $this.text();
	          $this.text(text.toUpperCase());
	      });
    };
})( jQuery );
